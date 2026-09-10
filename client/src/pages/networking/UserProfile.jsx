import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ProfileHeader from '../../components/profile/ProfileHeader';

export const UserProfilePage = () => {
  return (
    <PageContainer title="Candidate Network Profile">
      <ProfileHeader profile={{ name: 'Sarah Lin', title: 'Staff AI Engineer at OpenAI', location: 'San Francisco, CA' }} />
    </PageContainer>
  );
};

export default UserProfilePage;
