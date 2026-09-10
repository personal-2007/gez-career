import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ConnectionCard from '../../components/networking/ConnectionCard';

export const Connections = () => {
  return (
    <PageContainer title="My Professional Network">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ConnectionCard connection={{ name: 'David Chen', title: 'Engineering Lead at Stripe' }} />
      </div>
    </PageContainer>
  );
};

export default Connections;
