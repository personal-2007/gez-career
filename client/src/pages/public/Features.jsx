import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import { Cpu, Zap, Globe, Shield, Bot } from 'lucide-react';

export const Features = () => {
  return (
    <PageContainer title="Platform Capabilities & Features" subtitle="Everything you need to land senior engineering and leadership roles.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div className="glass-card" style={{ padding: '24px' }}>
          <Cpu size={28} color="#818cf8" style={{ marginBottom: '12px' }} />
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>ATS Engine</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Real-time formatting score and keyword optimization.</p>
        </div>
        <div className="glass-card" style={{ padding: '24px' }}>
          <Bot size={28} color="#14b8a6" style={{ marginBottom: '12px' }} />
          <h3 style={{ color: '#fff', marginBottom: '8px' }}>AI Mock Interviewer</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Instant feedback on STAR method responses.</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Features;
