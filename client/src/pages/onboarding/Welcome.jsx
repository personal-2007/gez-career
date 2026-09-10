import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Rocket } from 'lucide-react';
import Button from '../../components/common/Button';

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
      <div className="glass-card" style={{ padding: '40px', maxWidth: '520px' }}>
        <Rocket size={48} color="#818cf8" style={{ marginBottom: '16px' }} />
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>Welcome to GEZ Career!</h2>
        <p style={{ color: '#94a3b8', margin: '14px 0 28px', lineHeight: '1.6' }}>
          Let's personalize your career copilot in less than 2 minutes. We will analyze your skills, experience, and target roles to match you with top opportunities worldwide.
        </p>
        <Button variant="gradient" size="lg" onClick={() => navigate('/onboarding/basic-information')} style={{ width: '100%' }}>
          Start Setup Workflow
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
