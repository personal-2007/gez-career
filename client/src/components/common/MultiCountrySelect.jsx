import React, { useState, useRef, useEffect } from 'react';
import { Plus, X, Search, Check } from 'lucide-react';
import { COUNTRIES } from '../../data/countries';

export const MultiCountrySelect = ({
  values = [],
  onChange,
  label = 'Preferred Countries',
  placeholder = 'Add target country...'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  // Normalize selected values
  const selectedList = (Array.isArray(values) ? values : [])
    .map(v => COUNTRIES.find(c => c.name === v || c.code === v || c.iso3 === v)?.name || v)
    .filter(Boolean);

  const availableCountries = COUNTRIES.filter(
    c => !selectedList.includes(c.name) &&
         (c.name.toLowerCase().includes(search.trim().toLowerCase()) ||
          c.code.toLowerCase().includes(search.trim().toLowerCase()))
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

  const handleAdd = (countryName) => {
    if (!selectedList.includes(countryName)) {
      onChange([...selectedList, countryName]);
    }
    setSearch('');
    setIsOpen(false);
  };

  const handleRemove = (countryName) => {
    onChange(selectedList.filter(c => c !== countryName));
  };

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative', width: '100%' }}>
      {label && <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>{label}</label>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
        {selectedList.map((countryName, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '20px',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              color: '#2563eb',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            <span>{countryName}</span>
            <button
              type="button"
              onClick={() => handleRemove(countryName)}
              style={{ background: 'transparent', border: 'none', color: '#2563eb', cursor: 'pointer', display: 'flex', padding: 0 }}
            >
              <X size={14} />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '20px',
            background: '#ffffff',
            border: '1px dashed #94a3b8',
            color: '#475569',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          <Plus size={14} /> Add country
        </button>
      </div>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: 'min(360px, 100%)',
            marginTop: '6px',
            background: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(15, 23, 42, 0.15)',
            zIndex: 999,
            overflow: 'hidden',
            maxHeight: '280px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ padding: '8px 12px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '8px', background: '#f8fafc' }}>
            <Search size={16} color="#64748b" />
            <input
              type="text"
              autoFocus
              placeholder="Search 197 countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', fontSize: '0.875rem', color: '#0f172a' }}
            />
          </div>

          <div style={{ overflowY: 'auto', flex: 1, padding: '4px 0' }}>
            {availableCountries.length === 0 ? (
              <div style={{ padding: '12px 16px', fontSize: '0.85rem', color: '#94a3b8', textAlign: 'center' }}>
                No available countries match "{search}"
              </div>
            ) : (
              availableCountries.map((c) => (
                <div
                  key={c.code}
                  onClick={() => handleAdd(c.name)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#0f172a'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <span>{c.name} <span style={{ color: '#94a3b8', fontSize: '0.78rem' }}>({c.code})</span></span>
                  <Plus size={14} color="#64748b" />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiCountrySelect;
