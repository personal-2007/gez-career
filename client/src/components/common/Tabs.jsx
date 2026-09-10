import React from 'react';

export const Tabs = ({ tabs = [], activeTab, onChange }) => {
  return (
    <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '8px' }}>
      {tabs.map((tab, idx) => {
        const isActive = activeTab === (tab.id || tab);
        return (
          <button
            key={idx}
            onClick={() => onChange(tab.id || tab)}
            style={{
              background: isActive ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
              color: isActive ? '#818cf8' : '#94a3b8',
              border: isActive ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid transparent',
              borderRadius: '8px',
              padding: '6px 14px',
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer'
            }}
          >
            {tab.label || tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
