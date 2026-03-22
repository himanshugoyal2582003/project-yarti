'use client';

import '../../globals.css';
import { useRef, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveTab, setTripType,
  setFrom, setTo, setTrip,
  setPickupDate, setReturnDate, setPickupTime,
} from '../../../store/bookingSlice';


const FALLBACK_CITIES = [
  'Lucknow','Gorakhpur','Varanasi','Ayodhya','Allahabad','Prayagraj',
  'Kanpur','Agra','Mathura','Vrindavan','Jhansi','Bareilly','Meerut',
  'Noida','Ghaziabad','Delhi','Faridabad','Gurgaon','Jaipur','Mumbai',
  'Pune','Hyderabad','Bangalore','Chennai','Kolkata','Ahmedabad','Surat',
  'Indore','Bhopal','Nagpur','Patna','Ranchi','Dehradun','Haridwar',
  'Rishikesh','Shimla','Manali','Nainital','Chandigarh','Amritsar','Ludhiana',
];

async function fetchCities(query) {
  try {
    const url =
      `https://nominatim.openstreetmap.org/search` +
      `?q=${encodeURIComponent(query)}&countrycodes=in&featuretype=city` +
      `&format=json&limit=6&addressdetails=1`;
    const res = await fetch(url, { headers: { 'Accept-Language': 'en' } });
    const data = await res.json();
    if (data.length > 0) {
      return data.map(item => ({
        id: item.place_id,
        name: item.name || item.display_name.split(',')[0].trim(),
        state: item.address?.state || '',
      }));
    }
  } catch (_) {}
  return FALLBACK_CITIES
    .filter(c => c.toLowerCase().startsWith(query.toLowerCase()))
    .slice(0, 6)
    .map((name, i) => ({ id: i, name, state: '' }));
}


function CityInput({ label, value, onChange, placeholder = 'Input Text' }) {
  const [query, setQuery]             = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen]               = useState(false);
  const [loading, setLoading]         = useState(false);
  const debounceRef = useRef(null);
  const wrapRef     = useRef(null);

  
  useEffect(() => { setQuery(value || ''); }, [value]);

  
  useEffect(() => {
    const handler = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleChange = e => {
    const val = e.target.value;
    setQuery(val);
    onChange(val);                    
    clearTimeout(debounceRef.current);
    if (val.trim().length < 2) { setSuggestions([]); setOpen(false); return; }
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      const results = await fetchCities(val);
      setSuggestions(results);
      setOpen(results.length > 0);
      setLoading(false);
    }, 300);
  };

  const handleSelect = city => {
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
    <div className="field-group" ref={wrapRef}>
      <label>{label}</label>
      <div style={{ position: 'relative' }}>
        <input
          className="field-input"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          onFocus={() => suggestions.length > 0 && setOpen(true)}
          autoComplete="off"
          spellCheck={false}
        />
        {loading && <span className="city-spinner" />}
        {query && !loading && (
          <button className="city-clear" type="button" onClick={handleClear}>✕</button>
        )}
      </div>

      {open && suggestions.length > 0 && (
        <ul className="city-dropdown">
          {suggestions.map(city => (
            <li key={city.id} className="city-option" onMouseDown={() => handleSelect(city)}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                   stroke="#216900" strokeWidth="2.5" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="city-name">{city.name}</span>
              {city.state && <span className="city-state">{city.state}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
       stroke="#585858" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8"  y1="2" x2="8"  y2="6"/>
    <line x1="3"  y1="10" x2="21" y2="10"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
       stroke="#585858" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="9"/>
    <polyline points="12 7 12 12 15 15"/>
  </svg>
);


function DateInput({ label, value, onChange }) {
  return (
    <div className="field-group">
      <label>{label}</label>
      <div className="field-input-wrap">
        <input
          className="field-input"
          type="date"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <CalendarIcon />
      </div>
    </div>
  );
}


function TimeInput({ label, value, onChange }) {
  return (
    <div className="field-group">
      <label>{label}</label>
      <div className="field-input-wrap">
        <ClockIcon />
        <input
          className="field-input"
          type="time"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="00 : 00"
        />
      </div>
    </div>
  );
}


export default function BookingForm() {
  const dispatch = useDispatch();
  const {
    activeTab, tripType,
    from, to, trip,
    pickupDate, returnDate, pickupTime,
  } = useSelector(state => state.booking);

  const isOutstation = activeTab === 'outstation';
  const isLocal      = activeTab === 'local';
  const isAirport    = activeTab === 'airport';
  const isRound      = tripType === 'round';

  
  const handleTabChange = tab => {
    dispatch(setActiveTab(tab));
    if (tab !== 'outstation') dispatch(setTripType('oneway'));
  };

  const handleExplore = () => {
    const state = { activeTab, tripType, from, to, trip, pickupDate, returnDate, pickupTime };
    console.log('Booking state:', state);
  
  };

  return (
    <div className="booking-card">


      <div className="booking-tabs">
        {['outstation', 'local', 'airport'].map(tab => (
          <button
            key={tab}
            className={`tab-btn${activeTab === tab ? ' active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

     
      {isOutstation && (
        <div className="trip-type">
          <div
            className={`radio-option${tripType === 'oneway' ? ' selected' : ''}`}
            onClick={() => dispatch(setTripType('oneway'))}
          >
            <div className={`radio-circle${tripType === 'oneway' ? ' selected' : ''}`} />
            <label>One Way</label>
          </div>
          <div
            className={`radio-option${tripType === 'round' ? ' selected' : ''}`}
            onClick={() => dispatch(setTripType('round'))}
          >
            <div className={`radio-circle${tripType === 'round' ? ' selected' : ''}`} />
            <label>Round Trip</label>
          </div>
        </div>
      )}

     
      <div className="booking-fields">

        
        <div className="fields-row">
          <CityInput
            label="FROM"
            value={from}
            onChange={val => dispatch(setFrom(val))}
            placeholder="Enter pickup city"
          />
          {isAirport ? (
            <div className="field-group">
              <label>TRIP</label>
              <input
                className="field-input"
                placeholder="Enter trip details"
                value={trip}
                onChange={e => dispatch(setTrip(e.target.value))}
              />
            </div>
          ) : (
            <CityInput
              label="TO"
              value={to}
              onChange={val => dispatch(setTo(val))}
              placeholder="Enter destination"
            />
          )}
        </div>

     
        <div className="fields-row">
          <DateInput
            label={isAirport ? 'PICKUP DATE' : 'Pickup Date'}
            value={pickupDate}
            onChange={val => dispatch(setPickupDate(val))}
          />
          {isOutstation ? (
           
            <DateInput
              label="Return Date"
              value={returnDate}
              onChange={val => dispatch(setReturnDate(val))}
            />
          ) : (
           
            <TimeInput
              label={isAirport ? 'PICKUP TIME' : 'Pickup Time'}
              value={pickupTime}
              onChange={val => dispatch(setPickupTime(val))}
            />
          )}
        </div>

       
        {isOutstation && (
          <div className="fields-row fields-row--half">
            <TimeInput
              label="Pickup Time"
              value={pickupTime}
              onChange={val => dispatch(setPickupTime(val))}
            />
          </div>
        )}
      </div>

      
      <button className="explore-btn" onClick={handleExplore}>
        EXPLORE CABS
      </button>
    </div>
  );
}