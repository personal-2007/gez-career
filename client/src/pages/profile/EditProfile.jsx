import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

export const EditProfile = () => {
  return (
    <PageContainer title="Edit Profile Details">
      <div className="glass-card" style={{ padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Full Name" defaultValue="Alex Rivera" />
          <Input label="Headline" defaultValue="Senior Full Stack & AI Specialist" />
          <Input label="Location" defaultValue="San Francisco, CA" />
          <Button variant="gradient">Save Changes</Button>
        </form>
      </div>
    </PageContainer>
  );
};

export default EditProfile;
