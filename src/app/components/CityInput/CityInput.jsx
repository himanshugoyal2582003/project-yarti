'use client';
// components/CityInput/CityInput.jsx
import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './CityInput.module.css';

// Debounce helper
function useDebounce(fn, delay) {
  const timer = useRef(null);
  return useCallback((...args) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => fn(...args), delay);
  }, [fn, delay]);
}

// ─── API OPTIONS ──────────────────────────────────────────────────
// Option A: Nominatim (FREE, no key) — uncomment to use
async function fetchCitiesNominatim(query) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&countrycodes=in&featuretype=city&format=json&limit=6&addressdetails=1`;
  const res = await fetch(url, { headers: { 'Accept-Language': 'en' } });
  const data = await res.json();
  return data.map((item) => ({
    id: item.place_id,
    name: item.name || item.display_name.split(',')[0].trim(),
    state: item.address?.state || '',
    fullName: item.display_name,
  }));
}

// Option B: Google Places (paid after 1k/month) — set NEXT_PUBLIC_GOOGLE_API_KEY
async function fetchCitiesGoogle(query) {
  const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const url = `/api/places?input=${encodeURIComponent(query)}`; // proxy route below
  const res = await fetch(url);
  const data = await res.json();
  return (data.predictions || []).map((p) => ({
    id: p.place_id,
    name: p.structured_formatting?.main_text || p.description.split(',')[0],
    state: p.structured_formatting?.secondary_text || '',
    fullName: p.description,
  }));
}

// ─── FALLBACK OFFLINE LIST ────────────────────────────────────────
const INDIAN_CITIES = [
  'Lucknow', 'Gorakhpur', 'Varanasi', 'Ayodhya', 'Allahabad', 'Prayagraj',
  'Kanpur', 'Agra', 'Mathura', 'Vrindavan', 'Jhansi', 'Bareilly', 'Meerut',
  'Noida', 'Ghaziabad', 'Delhi', 'Faridabad', 'Gurgaon', 'Jaipur', 'Mumbai',
  'Pune', 'Hyderabad', 'Bangalore', 'Chennai', 'Kolkata', 'Ahmedabad', 'Surat',
  'Indore', 'Bhopal', 'Nagpur', 'Patna', 'Ranchi', 'Bhubaneswar', 'Visakhapatnam',
  'Coimbatore', 'Kochi', 'Chandigarh', 'Amritsar', 'Ludhiana', 'Dehradun',
  'Haridwar', 'Rishikesh', 'Shimla', 'Manali', 'Nainital', 'Mussoorie',
  'Allahabad', 'Moradabad', 'Aligarh', 'Saharanpur', 'Firozabad', 'Lakhimpur',
];

function fetchCitiesOffline(query) {
  const q = query.toLowerCase();
  return INDIAN_CITIES
    .filter((c) => c.toLowerCase().startsWith(q))
    .slice(0, 6)
    .map((name, i) => ({ id: i, name, state: '', fullName: name }));
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────
// Set API_MODE to 'nominatim' | 'google' | 'offline'
const API_MODE = 'nominatim';

export default function CityInput({
  label,
  placeholder = 'Input Text',
  value,
  onChange,
  rightIcons,
}) {
  const [query, setQuery] = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const wrapRef = useRef(null);
  const abortRef = useRef(null);

  // sync external value
  useEffect(() => { setQuery(value || ''); }, [value]);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const fetchSuggestions = useCallback(async (q) => {
    if (!q || q.trim().length < 2) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    // cancel previous request
    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    setLoading(true);
    try {
      let results = [];
      if (API_MODE === 'nominatim') {
        results = await fetchCitiesNominatim(q);
      } else if (API_MODE === 'google') {
        results = await fetchCitiesGoogle(q);
      } else {
        results = fetchCitiesOffline(q);
      }
      setSuggestions(results);
      setOpen(results.length > 0);
    } catch (err) {
      if (err.name !== 'AbortError') {
        // fallback to offline
        const offline = fetchCitiesOffline(q);
        setSuggestions(offline);
        setOpen(offline.length > 0);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedFetch = useDebounce(fetchSuggestions, 300);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    onChange(val);
    debouncedFetch(val);
  };

  const handleSelect = (city) => {
    setQuery(city.name);
    onChange(city.name);
    setSuggestions([]);
    setOpen(false);
  };

  const handleClear = () => {
    setQuery('');
    onChange('');
    setSuggestions([]);
    setOpen(false);
  };

  return (
    <div className={styles.fieldGroup} ref={wrapRef}>
      <span className={styles.fieldLabel}>{label}</span>
      <div className={styles.inputRow}>
        <div className={styles.inputWrap}>
          <input
            className={styles.input}
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={handleChange}
            onFocus={() => suggestions.length > 0 && setOpen(true)}
            autoComplete="off"
            spellCheck={false}
          />
          {loading && <span className={styles.spinner} />}
          {query && !loading && (
            <button className={styles.clearBtn} onClick={handleClear} type="button">✕</button>
          )}
        </div>
        {rightIcons && <div className={styles.rightIcons}>{rightIcons}</div>}
      </div>

      {open && suggestions.length > 0 && (
        <ul className={styles.dropdown} role="listbox">
          {suggestions.map((city) => (
            <li
              key={city.id}
              className={styles.dropdownItem}
              onMouseDown={() => handleSelect(city)}
              role="option"
            >
              <svg className={styles.pinIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div className={styles.cityInfo}>
                <span className={styles.cityName}>{city.name}</span>
                {city.state && <span className={styles.cityState}>{city.state}</span>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}