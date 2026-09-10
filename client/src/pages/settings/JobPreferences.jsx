import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Select from '../../components/common/Select';

export const JobPreferences = () => {
  return (
    <PageContainer title="Global Job Search Preferences">
      <div className="glass-card" style={{ padding: '24px', maxWidth: '600px' }}>
        <Select label="Desired Work Arrangement" options={['Hybrid', 'Remote', 'On-site']} />
      </div>
    </PageContainer>
  );
};

export default JobPreferences;
