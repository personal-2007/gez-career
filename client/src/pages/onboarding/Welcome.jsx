import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import Button from '../../components/common/Button';
import { LogoSymbol } from '../../components/common/Logo';

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: 'linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%)' }}>
      <div className="glass-card" style={{ padding: '40px', maxWidth: '560px', borderRadius: '24px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '18px' }}>
          <LogoSymbol size={64} />
        </div>
        <div className="glass-pill" style={{ marginBottom: '20px' }}>Global opportunity platform</div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.04em' }}>Your Career. Without Borders.</h2>
        <p style={{ color: '#475569', margin: '16px 0 28px', lineHeight: '1.7', fontSize: '1.02rem' }}>
          Find jobs globally, build a professional profile, connect with professionals, and prepare with AI to move faster toward your next opportunity.
        </p>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '28px', textAlign: 'left' }}>
          {['Find jobs globally', 'Build professional profile', 'Connect with professionals', 'Prepare with AI'].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0f172a', fontWeight: 600 }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
          <Button variant="gradient" size="lg" onClick={() => navigate('/onboarding/basic-information')} style={{ width: '100%' }}>
            Get Started
          </Button>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <Button variant="secondary" size="lg" onClick={() => navigate('/auth/login')}>Login</Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/auth/signup')}>Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
