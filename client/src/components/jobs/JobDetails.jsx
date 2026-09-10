import React from 'react';
import { MapPin, DollarSign, Clock, Building, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

export const JobDetails = ({ job, onApply }) => {
  if (!job) return null;

  return (
    <div className="glass-card" style={{ padding: '28px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc' }}>{job.title}</h2>
          <p style={{ color: '#818cf8', fontWeight: 600, fontSize: '1rem' }}>{job.company?.name}</p>
        </div>
        <Button variant="gradient" size="lg" onClick={onApply}>Apply Now</Button>
      </div>

      <div style={{ display: 'flex', gap: '20px', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '24px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> {job.location}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><DollarSign size={16} /> {job.salaryRange}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {job.postedAt}</span>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ color: '#f8fafc', marginBottom: '8px' }}>Job Description</h4>
        <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontSize: '0.95rem' }}>{job.description}</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ color: '#f8fafc', marginBottom: '12px' }}>Required Skills</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {job.skills?.map((s, idx) => (
            <Badge key={idx} variant="info">{s}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
