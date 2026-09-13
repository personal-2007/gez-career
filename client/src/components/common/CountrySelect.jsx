import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, Search, Check } from 'lucide-react';
import { COUNTRIES } from '../../data/countries';

export const CountrySelect = ({
  value,
  onChange,
  label = 'Country',
  placeholder = 'Select country',
  required = false,
  disabled = false,
  error = null
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Normalize selected country
  const selectedCountry = COUNTRIES.find(
    c => c.name === value || c.code === value || c.iso3 === value
  ) || null;

  const filteredCountries = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(search.trim().toLowerCase()) ||
    c.code.toLowerCase().includes(search.trim().toLowerCase()) ||
    c.iso3.toLowerCase().includes(search.trim().toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelect = (country) => {
    onChange(country.name, country);
    setIsOpen(false);
    setSearch('');
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange('', null);
    setSearch('');
  };

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev + 1) % Math.max(1, filteredCountries.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev - 1 + filteredCountries.length) % Math.max(1, filteredCountries.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCountries[highlightedIndex]) {
        handleSelect(filteredCountries[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: '6px', position: 'relative', width: '100%' }}>
      {label && (
        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </label>
      )}

      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        style={{
          width: '100%',
          minHeight: '42px',
          padding: '8px 14px',
          borderRadius: '10px',
          background: disabled ? '#f1f5f9' : '#ffffff',
          border: error ? '1px solid #ef4444' : isOpen ? '1px solid #2563eb' : '1px solid #cbd5e1',
          boxShadow: isOpen ? '0 0 0 3px rgba(37,99,235,0.12)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          cursor: disabled ? 'not-allowed' : 'pointer',
          userSelect: 'none',
          transition: 'all 0.2s ease'
        }}
      >
        <span style={{ fontSize: '0.9rem', color: selectedCountry ? '#0f172a' : '#94a3b8', fontWeight: selectedCountry ? 600 : 400 }}>
          {selectedCountry ? `${selectedCountry.name} (${selectedCountry.code})` : placeholder}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {selectedCountry && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear selection"
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', padding: 0 }}
            >
              <X size={16} />
            </button>
          )}
          <ChevronDown size={18} style={{ color: '#64748b', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
        </div>
      </div>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '4px',
            background: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(15, 23, 42, 0.15)',
            zIndex: 999,
            overflow: 'hidden',
            maxHeight: '320px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Search Box */}
          <div style={{ padding: '8px 12px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '8px', background: '#f8fafc' }}>
            <Search size={16} color="#64748b" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search 197 countries..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setHighlightedIndex(0);
              }}
              onClick={(e) => e.stopPropagation()}
              style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', fontSize: '0.875rem', color: '#0f172a' }}
            />
          </div>

          {/* List Options */}
          <div role="listbox" style={{ overflowY: 'auto', flex: 1, padding: '4px 0' }}>
            {filteredCountries.length === 0 ? (
              <div style={{ padding: '12px 16px', fontSize: '0.85rem', color: '#94a3b8', textAlign: 'center' }}>
                No country found matching "{search}"
              </div>
            ) : (
              filteredCountries.map((c, idx) => {
                const isSelected = selectedCountry && selectedCountry.code === c.code;
                const isHighlighted = idx === highlightedIndex;
                return (
                  <div
                    key={c.code}
                    role="option"
                    aria-selected={isSelected}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(c);
                    }}
                    onMouseEnter={() => setHighlightedIndex(idx)}
                    style={{
                      padding: '10px 16px',
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      background: isSelected ? '#eff6ff' : isHighlighted ? '#f8fafc' : 'transparent',
                      color: isSelected ? '#2563eb' : '#0f172a',
                      fontWeight: isSelected ? 600 : 400
                    }}
                  >
                    <span>{c.name} <span style={{ color: '#94a3b8', fontSize: '0.78rem', marginLeft: '6px' }}>({c.code})</span></span>
                    {isSelected && <Check size={16} color="#2563eb" />}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {error && <span style={{ fontSize: '0.78rem', color: '#ef4444' }}>{error}</span>}
    </div>
  );
};

export default CountrySelect;
