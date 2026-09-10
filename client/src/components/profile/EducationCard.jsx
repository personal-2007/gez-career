import React from 'react';
import { GraduationCap } from 'lucide-react';

export const EducationCard = ({ education = [] }) => {
  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <GraduationCap size={18} color="#818cf8" /> Education
      </h3>
      <h4 style={{ color: '#f1f5f9', fontWeight: 600 }}>University of California, Berkeley</h4>
      <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>B.S. in Computer Science (2017 - 2021)</p>
    </div>
  );
};

export default EducationCard;
