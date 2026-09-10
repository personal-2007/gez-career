import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ResumeCard from '../../components/profile/ResumeCard';
import ResumeScore from '../../components/ai/ResumeScore';

export const ProfileResume = () => {
  return (
    <PageContainer title="ATS Resume Center">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <ResumeCard atsScore={88} />
        <ResumeScore score={88} />
      </div>
    </PageContainer>
  );
};

export default ProfileResume;
