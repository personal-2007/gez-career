import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const steps = [
  { key: 'basic', label: 'Profile' },
  { key: 'skills', label: 'Skills' },
  { key: 'resume', label: 'Resume' },
  { key: 'preferences', label: 'Preferences' },
  { key: 'complete', label: 'Done' }
];

export const BasicInformation = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    headline: 'Senior Full Stack & AI Specialist',
    location: 'San Francisco, CA',
    experience: '5+',
    status: 'Open to opportunities'
  });

  const updateField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <PageContainer title="Basic Information" subtitle="Step 1 of 5" action={<div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>{steps.map((step, index) => (
      <span key={step.key} style={{ width: '10px', height: '10px', borderRadius: '50%', background: index === 0 ? '#2563eb' : 'rgba(148,163,184,0.5)' }} />
    ))}</div>}>
      <div className="glass-card" style={{ padding: '32px', maxWidth: '620px', margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Headline Role" value={form.headline} onChange={(e) => updateField('headline', e.target.value)} placeholder="e.g. Senior Full Stack & AI Specialist" />
          <Input label="Current City & Country" value={form.location} onChange={(e) => updateField('location', e.target.value)} placeholder="San Francisco, CA" />
          <Input label="Years of Experience" value={form.experience} onChange={(e) => updateField('experience', e.target.value)} placeholder="5+" />
          <Input label="Career Status" value={form.status} onChange={(e) => updateField('status', e.target.value)} placeholder="Open to opportunities" />

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', marginTop: '12px' }}>
            <Button variant="secondary" type="button" onClick={() => navigate('/auth/signup')}>Back</Button>
            <Button variant="gradient" type="button" onClick={() => navigate('/onboarding/skills')}>Next: Add Skills</Button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
};

export default BasicInformation;
