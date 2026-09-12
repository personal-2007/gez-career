import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const CareerPreferences = () => {
  const navigate = useNavigate();

  return (
    <PageContainer title="Career Preferences" subtitle="Step 4 of 5">
      <div className="glass-card" style={{ padding: '28px', maxWidth: '620px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#475569', fontWeight: 600 }}>Preferred Work Mode</label>
            <select style={{ width: '100%', background: 'rgba(15,23,42,0.04)', border: '1px solid rgba(148,163,184,0.4)', borderRadius: '10px', padding: '12px 14px', color: '#0f172a' }}>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#475569', fontWeight: 600 }}>Target Salary</label>
            <input placeholder="$120,000 - $180,000" style={{ width: '100%', background: 'rgba(15,23,42,0.04)', border: '1px solid rgba(148,163,184,0.4)', borderRadius: '10px', padding: '12px 14px', color: '#0f172a' }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', marginTop: '24px' }}>
          <Button variant="secondary" type="button" onClick={() => navigate('/onboarding/resume-upload')}>Back</Button>
          <Button variant="gradient" type="button" onClick={() => navigate('/onboarding/complete')}>Finish Setup</Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default CareerPreferences;
