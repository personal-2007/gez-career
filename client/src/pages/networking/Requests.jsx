import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ConnectionCard from '../../components/networking/ConnectionCard';

export const Requests = () => {
  return (
    <PageContainer title="Connection Requests">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ConnectionCard connection={{ name: 'Elena Rostova', title: 'Recruiter at Nexus AI Tech' }} />
      </div>
    </PageContainer>
  );
};

export default Requests;
