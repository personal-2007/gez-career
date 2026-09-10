import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import UserCard from '../../components/networking/UserCard';

export const PeopleSearch = () => {
  return (
    <PageContainer title="Search Network Connections">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
        <UserCard user={{ name: 'Sarah Lin', title: 'Staff AI Engineer' }} />
        <UserCard user={{ name: 'David Chen', title: 'Lead Architect' }} />
      </div>
    </PageContainer>
  );
};

export default PeopleSearch;
