import React from 'react';
import PageContainer from '../../components/layout/PageContainer';

export const NotificationSettings = () => {
  return (
    <PageContainer title="Notification Alerts">
      <div className="glass-card" style={{ padding: '24px' }}>
        <label style={{ display: 'flex', gap: '10px', color: '#cbd5e1' }}>
          <input type="checkbox" defaultChecked /> Email alerts for 90%+ match jobs
        </label>
      </div>
    </PageContainer>
  );
};

export default NotificationSettings;
