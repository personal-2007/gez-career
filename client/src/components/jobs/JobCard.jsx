import React from 'react';
import { MapPin, DollarSign, Clock, Sparkles, Bookmark } from 'lucide-react';
import Badge from '../common/Badge';

export const JobCard = ({ job, onClick }) => {
  return (
    <div className="glass-card" onClick={onClick} style={{ padding: '20px', cursor: 'pointer', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
        <div style={{ display: 'flex', gap: '14px' }}>
          <img src={job.company?.logo} alt={job.company?.name} style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }} />
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>{job.title}</h3>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500 }}>{job.company?.name}</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {job.matchScore && (
            <div className="glass-pill" style={{ background: 'rgba(99, 102, 241, 0.2)', border: '1px solid rgba(99, 102, 241, 0.4)', color: '#818cf8', fontWeight: 700 }}>
              <Sparkles size={12} /> {job.matchScore}% Match
            </div>
          )}
          <Bookmark size={18} color="#64748b" style={{ cursor: 'pointer' }} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px', fontSize: '0.825rem', color: '#94a3b8', marginBottom: '16px', flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {job.location}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><DollarSign size={14} /> {job.salaryRange}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {job.postedAt}</span>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {job.skills?.slice(0, 4).map((skill, idx) => (
          <Badge key={idx} variant="info">{skill}</Badge>
        ))}
        {job.type && <Badge variant="warning">{job.type}</Badge>}
      </div>
    </div>
  );
};

export default JobCard;
