import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileCompletion from '../../components/profile/ProfileCompletion';
import ExperienceCard from '../../components/profile/ExperienceCard';
import EducationCard from '../../components/profile/EducationCard';
import SkillsCard from '../../components/profile/SkillsCard';
import ResumeCard from '../../components/profile/ResumeCard';

export const MyProfile = () => {
  return (
    <PageContainer title="My Professional Profile" subtitle="Manage your career identity, ATS resume, and verified skills.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <ProfileHeader />
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <ExperienceCard />
            <EducationCard />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <ProfileCompletion score={92} />
            <ResumeCard atsScore={88} />
            <SkillsCard />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default MyProfile;
