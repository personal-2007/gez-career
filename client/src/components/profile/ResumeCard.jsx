import React from 'react';
import { FileText, Sparkles, Upload } from 'lucide-react';
import Button from '../common/Button';

export const ResumeCard = ({ atsScore = 88 }) => {
  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileText size={20} color="#818cf8" />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>ATS Verified Resume</h3>
        </div>
        <div className="glass-pill" style={{ color: '#10b981', fontWeight: 700 }}>
          <Sparkles size={12} /> {atsScore}% ATS Score
        </div>
      </div>
      <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '16px' }}>Alex_Rivera_FullStack_Resume_2026.pdf (350 KB)</p>
      <Button variant="secondary" size="sm" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Upload size={14} /> Update Resume File
      </Button>
    </div>
  );
};

export default ResumeCard;
