import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import UserCard from '../../components/networking/UserCard';

export const PeopleRecommendations = () => {
  return (
    <PageContainer title="Recommended Tech Peers">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
        <UserCard user={{ name: 'Marcus Vance', title: 'VP of Engineering' }} />
      </div>
    </PageContainer>
  );
};

export default PeopleRecommendations;
