import React, { useState } from 'react';
import { DollarSign, MapPin, TrendingUp, Search } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

export const SalaryExplorer = () => {
  const salaries = [
    { role: 'Senior Full Stack AI Engineer', location: 'San Francisco, CA', min: 160000, max: 210000, median: 185000 },
    { role: 'Lead Product UI/UX Designer', location: 'London, UK', min: 90000, max: 120000, median: 105000 },
    { role: 'Backend Platform Architect', location: 'Berlin, Germany', min: 110000, max: 145000, median: 128000 }
  ];

  return (
    <PageContainer title="Global Salary Explorer" subtitle="Verified compensation medians across roles, locations, and experience tiers.">
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px' }}>
        <Input icon={Search} placeholder="Role title (e.g. Full Stack, DevOps)..." />
        <Button variant="gradient">Search Salaries</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {salaries.map((sal, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>{sal.role}</h3>
            <p style={{ color: '#818cf8', fontSize: '0.85rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={14} /> {sal.location}
            </p>

            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', marginBottom: '8px' }}>
              ${sal.median.toLocaleString()} <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 400 }}>median / yr</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.825rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '10px' }}>
              <span>Min: ${sal.min.toLocaleString()}</span>
              <span>Max: ${sal.max.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default SalaryExplorer;
