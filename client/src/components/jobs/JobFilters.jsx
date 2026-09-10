import React from 'react';
import { JOB_TYPES, EXPERIENCE_LEVELS } from '../../utils/constants';

export const JobFilters = ({ filters, onChange }) => {
  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <h4 style={{ color: '#f8fafc', marginBottom: '16px', fontWeight: 600 }}>Filters</h4>
      
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '8px' }}>Job Type</label>
        {JOB_TYPES.map(type => (
          <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '6px', cursor: 'pointer' }}>
            <input type="checkbox" onChange={() => onChange && onChange('type', type)} />
            {type}
          </label>
        ))}
      </div>

      <div>
        <label style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '8px' }}>Experience Level</label>
        {EXPERIENCE_LEVELS.map(lvl => (
          <label key={lvl} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '6px', cursor: 'pointer' }}>
            <input type="checkbox" onChange={() => onChange && onChange('experienceLevel', lvl)} />
            {lvl}
          </label>
        ))}
      </div>
    </div>
  );
};

export default JobFilters;
