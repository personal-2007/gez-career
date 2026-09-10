import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

export const BasicInformation = () => {
  const navigate = useNavigate();
  return (
    <PageContainer title="Basic Information" subtitle="Step 1 of 5">
      <div className="glass-card" style={{ padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Headline Role" placeholder="e.g. Senior Full Stack & AI Specialist" />
          <Input label="Current City & Country" placeholder="San Francisco, CA" />
          <Input label="Years of Experience" placeholder="5+" />
          <Button variant="gradient" onClick={() => navigate('/onboarding/skills')} style={{ marginTop: '12px' }}>Next: Add Skills</Button>
        </form>
      </div>
    </PageContainer>
  );
};

export default BasicInformation;
