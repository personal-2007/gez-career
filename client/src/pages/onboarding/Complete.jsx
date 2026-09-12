import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Sparkles } from 'lucide-react';
import Button from '../../components/common/Button';

export const Complete = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: 'linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%)', textAlign: 'center' }}>
      <div className="glass-card" style={{ padding: '40px', maxWidth: '540px', borderRadius: '24px' }}>
        <CheckCircle2 size={56} color="#10b981" style={{ marginBottom: '16px' }} />
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Profile Ready!</h2>
        <p style={{ color: '#475569', margin: '16px 0 30px', lineHeight: '1.6', fontSize: '1rem' }}>
          Your profile readiness is 92%. We’ve prepared your personalized dashboard with matching jobs, AI recommendations, and career insights.
        </p>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '24px', textAlign: 'left' }}>
          {['AI resume recommendations', 'Matching job suggestions', 'Global opportunity alerts'].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0f172a', fontWeight: 600 }}>
              <Sparkles size={18} color="#2563eb" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <Button variant="gradient" size="lg" onClick={() => navigate('/dashboard')} style={{ width: '100%' }}>
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Complete;
