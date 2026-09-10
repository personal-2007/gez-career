import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';

export const Skills = () => {
  const navigate = useNavigate();
  return (
    <PageContainer title="Your Core Skills" subtitle="Step 2 of 5">
      <div className="glass-card" style={{ padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
        <Input label="Add Skill" placeholder="e.g. React, Node.js, Python..." />
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '20px 0' }}>
          <Badge variant="info">React</Badge>
          <Badge variant="info">Node.js</Badge>
          <Badge variant="info">TypeScript</Badge>
          <Badge variant="info">PostgreSQL</Badge>
        </div>
        <Button variant="gradient" onClick={() => navigate('/onboarding/resume-upload')} style={{ width: '100%' }}>Next: Upload Resume</Button>
      </div>
    </PageContainer>
  );
};

export default Skills;
