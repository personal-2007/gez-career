import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, UserRound, Search } from 'lucide-react';
import Button from '../../components/common/Button';

export const Landing = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a' }}>
      <section style={{ padding: '96px 24px 72px', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>
        <p style={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.78rem', marginBottom: '18px' }}>Gez-Career</p>
        <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, maxWidth: '780px', margin: '0 auto 20px', fontFamily: 'var(--font-heading)' }}>
          Find jobs. Build your career.
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '590px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Search global opportunities, present your experience clearly, and stay organized through every application.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/auth/signup">
            <Button variant="gradient" size="lg" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Get started <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/auth/login">
            <Button variant="outline" size="lg">Log in</Button>
          </Link>
        </div>
      </section>

      <section style={{ padding: '56px 24px', maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          <div className="glass-card" style={{ padding: '28px' }}>
            <Search size={24} color="#2563eb" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: 700, marginBottom: '8px' }}>Search opportunities</h3>
            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6 }}>Browse roles by location, work mode, experience, and skills.</p>
          </div>

          <div className="glass-card" style={{ padding: '28px' }}>
            <UserRound size={24} color="#2563eb" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: 700, marginBottom: '8px' }}>Build your profile</h3>
            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6 }}>Keep your experience, skills, and resume ready for employers.</p>
          </div>

          <div className="glass-card" style={{ padding: '28px' }}>
            <Briefcase size={24} color="#2563eb" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: 700, marginBottom: '8px' }}>Track applications</h3>
            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6 }}>Keep each application and next step in one clear place.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
