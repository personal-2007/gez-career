import React, { useState } from 'react';

export const Dropdown = ({ trigger, items = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>{trigger}</div>
      {open && (
        <div className="glass-card" style={{ position: 'absolute', right: 0, top: '100%', marginTop: '8px', minWidth: '180px', padding: '8px 0', zIndex: 50 }}>
          {items.map((item, idx) => (
            <div key={idx} onClick={() => { item.onClick && item.onClick(); setOpen(false); }} style={{ padding: '8px 16px', fontSize: '0.875rem', color: '#cbd5e1', cursor: 'pointer', hover: { background: 'rgba(255,255,255,0.05)' } }}>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
