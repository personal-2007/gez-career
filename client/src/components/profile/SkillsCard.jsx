import React from 'react';
import Badge from '../common/Badge';

export const SkillsCard = ({ skills = ['React', 'Node.js', 'Python', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Docker'] }) => {
  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '14px' }}>Skills & Expertise</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {skills.map((s, idx) => (
          <Badge key={idx} variant="skill">{s}</Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
