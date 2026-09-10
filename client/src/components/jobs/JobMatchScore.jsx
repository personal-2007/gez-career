import React from 'react';
import { Sparkles, CheckCircle, AlertCircle } from 'lucide-react';

export const JobMatchScore = ({ score = 94, matchedSkills = [], missingSkills = [] }) => {
  return (
    <div className="glass-card" style={{ padding: '20px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.1))' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={20} color="#818cf8" />
          <h4 style={{ color: '#f8fafc', fontWeight: 700 }}>AI Match Breakdown</h4>
        </div>
        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#818cf8' }}>{score}%</span>
      </div>

      <div style={{ marginBottom: '10px', fontSize: '0.85rem' }}>
        <p style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
          <CheckCircle size={14} /> Matched: React, Node.js, TypeScript, REST APIs
        </p>
        <p style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <AlertCircle size={14} /> Recommended gap additions: Vector Databases, Docker
        </p>
      </div>
    </div>
  );
};

export default JobMatchScore;
