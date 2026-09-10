import React from 'react';
import { Briefcase } from 'lucide-react';

export const ExperienceCard = ({ experiences = [] }) => {
  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Briefcase size={18} color="#818cf8" /> Work Experience
      </h3>

      {experiences.length === 0 ? (
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Senior Software Engineer at TechCorp Global (2022 - Present)</p>
      ) : (
        experiences.map((exp, idx) => (
          <div key={idx} style={{ marginBottom: '14px', borderBottom: idx < experiences.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingBottom: '10px' }}>
            <h4 style={{ color: '#f1f5f9', fontWeight: 600 }}>{exp.title}</h4>
            <p style={{ color: '#818cf8', fontSize: '0.85rem' }}>{exp.company} • {exp.startDate} - {exp.endDate}</p>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '4px' }}>{exp.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ExperienceCard;
