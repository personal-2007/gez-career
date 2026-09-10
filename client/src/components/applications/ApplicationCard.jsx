import React from 'react';
import { Calendar, Building, ChevronRight } from 'lucide-react';
import Badge from '../common/Badge';

export const ApplicationCard = ({ application, onClick }) => {
  const job = application.job || {};
  const statusVariants = {
    applied: 'info',
    reviewing: 'warning',
    interviewing: 'success',
    offered: 'success',
    rejected: 'danger'
  };

  return (
    <div className="glass-card" onClick={onClick} style={{ padding: '16px', cursor: 'pointer' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h4 style={{ color: '#f8fafc', fontWeight: 700 }}>{job.title || 'Senior Full Stack AI Engineer'}</h4>
        <Badge variant={statusVariants[application.status] || 'info'}>{application.status?.toUpperCase()}</Badge>
      </div>

      <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '8px' }}>{job.company?.name || 'Nexus AI Tech'}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#64748b' }}>
        <span>Applied {application.appliedAt ? new Date(application.appliedAt).toLocaleDateString() : 'Recently'}</span>
        <ChevronRight size={16} />
      </div>
    </div>
  );
};

export default ApplicationCard;
