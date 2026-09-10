import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

export const ApplicationTimeline = ({ timeline = [] }) => {
  const steps = [
    { label: 'Application Submitted', date: '2 days ago', done: true },
    { label: 'Under Review by Hiring Team', date: 'Yesterday', done: true },
    { label: 'Technical Screening Interview', date: 'Upcoming - Oct 14', done: false },
    { label: 'Final Offer Decision', date: 'Pending', done: false }
  ];

  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <h4 style={{ color: '#f8fafc', fontWeight: 700, marginBottom: '16px' }}>Application Progress Timeline</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {steps.map((step, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            {step.done ? <CheckCircle2 size={18} color="#10b981" /> : <Clock size={18} color="#64748b" />}
            <div>
              <p style={{ color: step.done ? '#f1f5f9' : '#94a3b8', fontWeight: 500, fontSize: '0.9rem' }}>{step.label}</p>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{step.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationTimeline;
