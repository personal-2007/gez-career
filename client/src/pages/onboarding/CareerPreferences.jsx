import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Select from '../../components/common/Select';

export const CareerPreferences = () => {
  return (
    <PageContainer title="Career Preferences">
      <div className="glass-card" style={{ padding: '28px', maxWidth: '600px', margin: '0 auto' }}>
        <Select label="Preferred Workplace" options={['Hybrid', 'Remote', 'On-site']} />
      </div>
    </PageContainer>
  );
};

export default CareerPreferences;
