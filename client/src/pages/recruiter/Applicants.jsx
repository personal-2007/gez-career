import React from 'react';
import { Sparkles, Check, X } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import Avatar from '../../components/common/Avatar';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

export const Applicants = () => {
  const applicants = [
    { id: '1', name: 'Alex Rivera', title: 'Senior Full Stack & AI Specialist', matchScore: 96, atsScore: 88 },
    { id: '2', name: 'Michael Chang', title: 'Full Stack Engineer', matchScore: 89, atsScore: 82 }
  ];

  return (
    <PageContainer title="Candidate Applications — Senior Full Stack AI Engineer">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {applicants.map(app => (
          <div key={app.id} className="glass-card" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Avatar name={app.name} size="lg" />
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>{app.name}</h4>
                <p style={{ color: '#818cf8', fontSize: '0.85rem' }}>{app.title}</p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                  <Badge variant="info">{app.matchScore}% AI Match</Badge>
                  <Badge variant="success">{app.atsScore}% ATS Verified</Badge>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <Button variant="secondary" size="sm">Schedule Call</Button>
              <Button variant="gradient" size="sm">Shortlist Candidate</Button>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default Applicants;
