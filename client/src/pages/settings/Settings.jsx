import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

export const Settings = () => {
  return (
    <PageContainer title="Account & Preference Settings">
      <div className="glass-card" style={{ padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
        <h3 style={{ color: '#fff', marginBottom: '20px' }}>General Account Preferences</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Email Address" defaultValue="alex.developer@gezcareer.com" />
          <Input label="Timezone" defaultValue="America/Los_Angeles (PST)" />
          <Button variant="gradient">Save Settings</Button>
        </form>
      </div>
    </PageContainer>
  );
};

export default Settings;
