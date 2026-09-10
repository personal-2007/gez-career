import React from 'react';
import ApplicationCard from './ApplicationCard';

export const ApplicationKanban = ({ applications = [] }) => {
  const columns = [
    { title: 'Applied (1)', status: 'applied', color: '#6366f1' },
    { title: 'Reviewing (1)', status: 'reviewing', color: '#f59e0b' },
    { title: 'Interviewing (0)', status: 'interviewing', color: '#10b981' },
    { title: 'Offered (0)', status: 'offered', color: '#ec4899' }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
      {columns.map((col, idx) => (
        <div key={idx} className="glass-card" style={{ padding: '16px', minHeight: '400px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', borderBottom: `2px solid ${col.color}`, paddingBottom: '8px' }}>
            <h4 style={{ color: '#f8fafc', fontWeight: 700, fontSize: '0.95rem' }}>{col.title}</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {applications.filter(a => a.status === col.status).map(app => (
              <ApplicationCard key={app.id} application={app} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationKanban;
