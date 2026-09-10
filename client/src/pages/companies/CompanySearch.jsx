import React from 'react';
import { Star, MapPin, Building } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

export const CompanySearch = () => {
  const companies = [
    {
      id: 'comp_1',
      name: 'Nexus AI Tech',
      logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150',
      industry: 'Artificial Intelligence & Software',
      location: 'San Francisco, CA',
      rating: 4.8,
      reviewsCount: 142,
      openJobs: 12
    },
    {
      id: 'comp_2',
      name: 'Sphere Cloud Systems',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150',
      industry: 'Cloud Computing & Infrastructure',
      location: 'London, UK',
      rating: 4.6,
      reviewsCount: 389,
      openJobs: 24
    }
  ];

  return (
    <PageContainer title="Explore Verified Companies" subtitle="Discover workplace culture, compensation data, and verified employee reviews.">
      <div style={{ marginBottom: '24px' }}>
        <Input placeholder="Search company by name or industry..." />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {companies.map(comp => (
          <div key={comp.id} className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '14px' }}>
              <img src={comp.logo} alt={comp.name} style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover' }} />
              <div>
                <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700 }}>{comp.name}</h3>
                <p style={{ color: '#818cf8', fontSize: '0.85rem' }}>{comp.industry}</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '16px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontWeight: 600 }}>
                <Star size={14} fill="#f59e0b" /> {comp.rating} ({comp.reviewsCount})
              </span>
              <span><MapPin size={14} /> {comp.location}</span>
            </div>

            <Button variant="secondary" style={{ width: '100%' }}>View {comp.openJobs} Active Jobs</Button>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default CompanySearch;
