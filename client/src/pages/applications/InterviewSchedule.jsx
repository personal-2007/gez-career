import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';

export const InterviewSchedule = () => {
  return (
    <PageContainer title="Scheduled Interviews" subtitle="Upcoming live technical screens and recruiter calls.">
      <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Calendar size={32} color="#818cf8" />
        <div>
          <h4 style={{ color: '#fff', fontWeight: 700 }}>Nexus AI Tech — Technical Screen</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Thursday, Oct 14 at 2:00 PM PST • Video Conference</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default InterviewSchedule;
