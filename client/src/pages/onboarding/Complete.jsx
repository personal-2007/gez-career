import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Sparkles } from 'lucide-react';
import Button from '../../components/common/Button';

export const Complete = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
      <div className="glass-card" style={{ padding: '40px', maxWidth: '500px' }}>
        <CheckCircle2 size={56} color="#10b981" style={{ marginBottom: '16px' }} />
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>Profile Ready!</h2>
        <p style={{ color: '#94a3b8', margin: '14px 0 28px', lineHeight: '1.6' }}>
          Your profile readiness is 92%. We've populated your personalized Dashboard with matching AI jobs and ATS recommendations.
        </p>
        <Button variant="gradient" size="lg" onClick={() => navigate('/dashboard')} style={{ width: '100%' }}>
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Complete;
