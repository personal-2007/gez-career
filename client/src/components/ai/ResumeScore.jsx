import React from 'react';
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export const ResumeScore = ({ score = 88, strengths = [], weaknesses = [] }) => {
  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', fontWeight: 700 }}>ATS Resume Audit Report</h3>
        <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981' }}>{score}/100</div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h4 style={{ color: '#10b981', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CheckCircle2 size={16} /> Key Strengths
        </h4>
        <ul style={{ color: '#cbd5e1', fontSize: '0.85rem', paddingLeft: '20px', lineHeight: '1.6' }}>
          <li>Clean 1-column responsive hierarchy</li>
          <li>Strong action verbs (Architected, Engineered, Spearheaded)</li>
          <li>Verified modern technology stack keywords</li>
        </ul>
      </div>

      <div>
        <h4 style={{ color: '#f59e0b', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <AlertCircle size={16} /> Recommended Fixes
        </h4>
        <ul style={{ color: '#cbd5e1', fontSize: '0.85rem', paddingLeft: '20px', lineHeight: '1.6' }}>
          <li>Quantify bullet points with metric outcomes (% latency reduction)</li>
          <li>Add vector database & AI orchestration tags</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeScore;
