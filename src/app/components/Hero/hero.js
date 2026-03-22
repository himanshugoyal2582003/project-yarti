'use client';

import { useState } from 'react';
import "../../globals.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState('outstation');
  const [tripType, setTripType] = useState('roundtrip');

  return (
    <div className="container">
      <div className="overlay"></div>

      <div className="hero">
        <div className="left">
          <h1>
            INDIA'S <span>LEADING ONE WAY</span> <br />
            INTERCITY CAB <br />
            SERVICE PROVIDER
          </h1>
        </div>

        <div className="form-box">
          {/* Tabs */}
          <div className="tabs">
            {['outstation', 'local', 'airport'].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="form-divider" />

          {/* Trip type */}
          <div className="trip-type">
            <label>
              <input
                type="radio"
                name="trip"
                checked={tripType === 'oneway'}
                onChange={() => setTripType('oneway')}
              />
              One Way
            </label>
            <label>
              <input
                type="radio"
                name="trip"
                checked={tripType === 'roundtrip'}
                onChange={() => setTripType('roundtrip')}
              />
              Round Trip
            </label>
          </div>

          {/* FROM / TO */}
          <div className="field-row">
            <div className="field-group">
              <span className="field-label">FROM</span>
              <div className="field-input-wrap">
                <input className="field-input" type="text" placeholder="Input Text" />
              </div>
            </div>
            <div className="field-group">
              <span className="field-label">TO</span>
              <div className="field-input-wrap">
                <input className="field-input" type="text" placeholder="Input Text" />
                <div className="swap-icons">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Pickup Date / Return Date */}
          <div className="field-row">
            <div className="field-group">
              <span className="field-label">Pickup Date</span>
              <div className="field-input-wrap">
                <input className="field-input" type="text" placeholder="Input Text" />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
            </div>
            {tripType === 'roundtrip' ? (
              <div className="field-group">
                <span className="field-label">Return Date</span>
                <div className="field-input-wrap">
                  <input className="field-input" type="text" placeholder="Input Text" />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
              </div>
            ) : <div className="field-group" />}
          </div>

          {/* Pickup Time */}
          <div className="field-row">
            <div className="field-group">
              <span className="field-label">Pickup Time</span>
              <div className="field-input-wrap">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>
                <input className="field-input field-time" type="text" placeholder="00 : 00" />
              </div>
            </div>
            <div className="field-group" />
          </div>

          {/* CTA */}
          <div className="cta-row">
            <button className="cta">EXPLORE CABS</button>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <h3>Transparent Billing</h3>
          <p>GPS Based Billing | No Km Tampering</p>
        </div>

        <div className="bottom-divider" />

        <div className="bottom-center">
          <p>Download Now!</p>
          <div className="store-badges">
            {/* Google Play */}
            <a href="#" className="store-badge">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.414 0.276C0.155 0.549 0 0.96 0 1.495V20.505C0 21.04 0.155 21.451 0.414 21.724L0.483 21.791L11.138 11.136V10.864L0.483 0.209L0.414 0.276Z" fill="#4285F4"/>
                <path d="M14.611 14.614L11.138 11.136V10.864L14.612 7.386L14.699 7.435L18.795 9.773C19.972 10.44 19.972 11.56 18.795 12.228L14.699 14.565L14.611 14.614Z" fill="#FBBC04"/>
                <path d="M14.699 14.565L11.138 11L0.414 21.724C0.805 22.138 1.446 22.188 2.165 21.776L14.699 14.565Z" fill="#34A853"/>
                <path d="M2.165 0.224C1.446 -0.188 0.805 -0.138 0.414 0.276L11.138 11L14.699 7.435L2.165 0.224Z" fill="#EA4335"/>
              </svg>
              <div className="badge-text">
                <span className="badge-sub">GET IT ON</span>
                <span className="badge-main">Google Play</span>
              </div>
            </a>

            {/* App Store */}
            <a href="#" className="store-badge">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.462 12.748c-.028-3.04 2.49-4.51 2.603-4.578-1.42-2.074-3.626-2.357-4.408-2.385-1.87-.19-3.656 1.107-4.604 1.107-.952 0-2.415-1.083-3.97-1.054-2.034.03-3.915 1.183-4.963 2.993-2.118 3.668-.542 9.096 1.52 12.074 1.01 1.454 2.208 3.084 3.785 3.026 1.52-.063 2.095-.978 3.934-.978 1.838 0 2.365.978 3.972.945 1.638-.027 2.672-1.479 3.672-2.938 1.162-1.682 1.637-3.312 1.661-3.398-.037-.015-3.182-1.218-3.202-4.814zM13.296 3.67C14.12 2.668 14.68 1.28 14.52 0c-1.17.048-2.612.78-3.462 1.763-.754.863-1.423 2.27-1.24 3.606 1.31.1 2.652-.664 3.478-1.699z"/>
              </svg>
              <div className="badge-text">
                <span className="badge-sub">Download on the</span>
                <span className="badge-main">App Store</span>
              </div>
            </a>
          </div>
        </div>

        <div className="bottom-divider cabin" />

        <div className="item">
          <h3>No return fare</h3>
          <p>Oneway Cab Fare | No Hidden Charges</p>
        </div>
      </div>
    </div>
  );
}