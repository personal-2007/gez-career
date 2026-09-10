import React from 'react';

export const Input = ({ label, icon: Icon, error, className = '', ...props }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {label && <label style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>{label}</label>}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {Icon && <Icon size={18} style={{ position: 'absolute', left: '12px', color: '#64748b' }} />}
        <input
          style={{
            width: '100%',
            backgroundColor: 'rgba(12, 17, 32, 0.9)',
            border: error ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            padding: Icon ? '10px 12px 10px 38px' : '10px 12px',
            color: '#f8fafc',
            fontSize: '0.9rem',
            outline: 'none'
          }}
          {...props}
        />
      </div>
      {error && <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{error}</span>}
    </div>
  );
};

export default Input;
