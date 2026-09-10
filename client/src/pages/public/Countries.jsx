import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import { Globe } from 'lucide-react';

export const Countries = () => {
  const countries = [
    { name: 'United States', flag: '🇺🇸', jobs: 1420 },
    { name: 'United Kingdom', flag: '🇬🇧', jobs: 890 },
    { name: 'Canada', flag: '🇨🇦', jobs: 650 },
    { name: 'Germany', flag: '🇩🇪', jobs: 520 },
    { name: 'Australia', flag: '🇦🇺', jobs: 410 },
    { name: 'Singapore', flag: '🇸🇬', jobs: 380 },
    { name: 'India', flag: '🇮🇳', jobs: 1850 },
    { name: 'Global Remote', flag: '🌐', jobs: 3200 }
  ];

  return (
    <PageContainer title="Global Tech Markets" subtitle="Browse openings across major global technology hubs.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
        {countries.map((c, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '2rem' }}>{c.flag}</span>
            <div>
              <h4 style={{ color: '#fff', fontWeight: 600 }}>{c.name}</h4>
              <p style={{ color: '#818cf8', fontSize: '0.85rem' }}>{c.jobs.toLocaleString()} Openings</p>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default Countries;
