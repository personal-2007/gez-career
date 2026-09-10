import React from 'react';
import PageContainer from '../../components/layout/PageContainer';

export const PrivacySettings = () => {
  return (
    <PageContainer title="Privacy Controls">
      <div className="glass-card" style={{ padding: '24px' }}>
        <label style={{ display: 'flex', gap: '10px', color: '#cbd5e1', cursor: 'pointer' }}>
          <input type="checkbox" defaultChecked /> Hide profile from current employer
        </label>
      </div>
    </PageContainer>
  );
};

export default PrivacySettings;
