import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import Button from '../common/Button';

export const JobSearch = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch && onSearch({ keyword, location });
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <div style={{ flex: 2, display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '10px 14px', borderRadius: '10px' }}>
        <Search size={18} color="#64748b" />
        <input
          placeholder="Job title, skill, or company..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', outline: 'none' }}
        />
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '10px 14px', borderRadius: '10px' }}>
        <MapPin size={18} color="#64748b" />
        <input
          placeholder="Country or city..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', outline: 'none' }}
        />
      </div>

      <Button type="submit" variant="gradient">Search Jobs</Button>
    </form>
  );
};

export default JobSearch;
