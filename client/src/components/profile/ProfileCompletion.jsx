import React from 'react';
import { Award } from 'lucide-react';

export const ProfileCompletion = ({ score = 92 }) => {
  return (
    <div className="glass-card" style={{ padding: '20px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(99, 102, 241, 0.1))' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#6ee7b7', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Award size={16} /> Profile Readiness Score
        </span>
        <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981' }}>{score}%</span>
      </div>

      <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: `${score}%`, height: '100%', background: '#10b981', borderRadius: '4px' }} />
      </div>
    </div>
  );
};

export default ProfileCompletion;
