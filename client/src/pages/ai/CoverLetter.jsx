import React, { useState } from 'react';
import { Sparkles, Copy } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const CoverLetter = () => {
  const [generated, setGenerated] = useState(false);

  return (
    <PageContainer title="AI Cover Letter Generator" subtitle="Instantly draft role-tailored cover letters that highlight your strengths.">
      <div className="glass-card" style={{ padding: '28px', maxWidth: '700px' }}>
        {!generated ? (
          <Button variant="gradient" onClick={() => setGenerated(true)}>Generate Cover Letter for Nexus AI Tech</Button>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
              <h4 style={{ color: '#818cf8', fontWeight: 600 }}>Draft for Senior Full Stack AI Engineer</h4>
              <button style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Copy size={16} /> Copy
              </button>
            </div>
            <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '0.925rem' }}>
              Dear Hiring Team at Nexus AI Tech,
              <br /><br />
              I am writing to express my strong enthusiasm for the Senior Full Stack AI Engineer position. With 5+ years of production experience scaling React applications and building autonomous agent orchestration pipelines with Node.js and Vector Databases, I am confident in driving immediate impact...
            </p>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default CoverLetter;
