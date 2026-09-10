import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import Button from '../../components/common/Button';

export const CreateJob = () => {
  return (
    <PageContainer title="Post a New Job Opening" subtitle="Reach verified high-match candidates globally.">
      <div className="glass-card" style={{ padding: '32px', maxWidth: '700px', margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Job Title" placeholder="e.g. Senior Full Stack AI Engineer" required />
          <Select label="Workplace Arrangement" options={['Hybrid', 'Remote', 'On-site']} />
          <Input label="Location" placeholder="San Francisco, CA or Remote" />
          <Input label="Salary Range" placeholder="$160,000 - $210,000 / yr" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Job Description</label>
            <textarea rows={5} placeholder="Describe responsibilities and requirements..." style={{ background: 'rgba(12,17,32,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px', color: '#fff', outline: 'none' }} />
          </div>
          <Button variant="gradient" size="lg" style={{ marginTop: '12px' }}>Publish Job Opening</Button>
        </form>
      </div>
    </PageContainer>
  );
};

export default CreateJob;
