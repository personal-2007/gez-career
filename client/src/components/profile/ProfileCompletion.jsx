import React from 'react';
import { Award } from 'lucide-react';

export const ProfileCompletion = ({ score = 88 }) => {
  return (
    <div className="glass-card" style={{ padding: '20px', background: '#ecfdf5', border: '1px solid #a7f3d0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#047857', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Award size={18} /> Profile Strength & Readiness
        </span>
        <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#047857' }}>{score}%</span>
      </div>

      <div style={{ width: '100%', height: '8px', background: '#d1fae5', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: `${score}%`, height: '100%', background: '#059669', borderRadius: '4px', transition: 'width 0.4s ease' }} />
      </div>
      <div style={{ marginTop: '8px', fontSize: '0.78rem', color: '#065f46' }}>
        Complete your college education, CGPA, and project links to reach 100% readiness.
      </div>
    </div>
  );
};

export default ProfileCompletion;

