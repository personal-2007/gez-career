import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const CareerStatus = () => {
  const navigate = useNavigate();
  return (
    <PageContainer title="Career Status" subtitle="Are you actively looking for roles?">
      <div className="glass-card" style={{ padding: '32px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'grid', gap: '12px', marginBottom: '20px' }}>
          {['Actively looking', 'Open to offers', 'Exploring casually'].map((option) => (
            <button key={option} type="button" style={{ border: '1px solid rgba(148,163,184,0.4)', background: 'rgba(255,255,255,0.04)', color: '#0f172a', borderRadius: '12px', padding: '12px 14px', fontWeight: 600 }}>
              {option}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
          <Button variant="secondary" type="button" onClick={() => navigate('/onboarding/welcome')}>Back</Button>
          <Button variant="gradient" type="button" onClick={() => navigate('/onboarding/basic-information')}>Continue</Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default CareerStatus;
