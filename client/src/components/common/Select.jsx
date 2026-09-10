import React from 'react';

export const Select = ({ label, options = [], value, onChange, className = '' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {label && <label style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>{label}</label>}
      <select
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          backgroundColor: 'rgba(12, 17, 32, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          padding: '10px 12px',
          color: '#f8fafc',
          fontSize: '0.9rem',
          outline: 'none'
        }}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value || opt} style={{ background: '#0b0f19' }}>
            {opt.label || opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
