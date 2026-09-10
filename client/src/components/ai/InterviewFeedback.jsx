import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

export const InterviewFeedback = ({ feedback }) => {
  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <Award size={22} color="#10b981" />
        <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', fontWeight: 700 }}>Mock Interview Evaluation</h3>
      </div>
      <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5' }}>
        Strong technical rationale provided for database index design. High STAR method rating.
      </p>
    </div>
  );
};

export default InterviewFeedback;
