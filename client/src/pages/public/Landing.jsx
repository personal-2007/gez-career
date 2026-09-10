import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';
import Button from '../../components/common/Button';

export const Landing = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Hero Section */}
      <section style={{ padding: '100px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%', pointerEvents: 'none'
        }} />

        <div className="glass-pill" style={{ marginBottom: '24px' }}>
          <Sparkles size={14} color="#818cf8" /> Enterprise AI Career Platform 2.0
        </div>

        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff', lineHeight: 1.15, maxWidth: '900px', margin: '0 auto 20px', fontFamily: 'Space Grotesk, sans-serif' }}>
          Accelerate Your Global Tech Career with <span style={{ background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Autonomous AI</span>
        </h1>

        <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto 36px', lineHeight: 1.6 }}>
          Automated ATS resume optimization, AI mock interviewer, real-time global job matching, and direct recruiter pipelines built for top 1% tech talent.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link to="/auth/signup">
            <Button variant="gradient" size="lg" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Get Started Free <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/auth/login">
            <Button variant="secondary" size="lg">Explore Platform</Button>
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          <div className="glass-card" style={{ padding: '28px' }}>
            <Cpu size={32} color="#818cf8" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700, marginBottom: '8px' }}>ATS Resume Copilot</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: 1.6 }}>Real-time formatting score, keyword gap analysis, and instant AI resume rewriting.</p>
          </div>

          <div className="glass-card" style={{ padding: '28px' }}>
            <Zap size={32} color="#14b8a6" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700, marginBottom: '8px' }}>AI Technical Interviewer</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: 1.6 }}>Practice live technical and STAR-method behavioral questions with instant scoring.</p>
          </div>

          <div className="glass-card" style={{ padding: '28px' }}>
            <Globe size={32} color="#ec4899" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700, marginBottom: '8px' }}>Global Country & Salary Radar</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: 1.6 }}>Explore verified compensation data across US, UK, EU, Canada, and global remote Hubs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
