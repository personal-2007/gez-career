import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const defaultSkills = ['React', 'Node.js', 'TypeScript', 'PostgreSQL'];

export const Skills = () => {
  const navigate = useNavigate();
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState(defaultSkills);

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed || skills.includes(trimmed)) return;
    setSkills((prev) => [...prev, trimmed]);
    setSkillInput('');
  };

  return (
    <PageContainer title="Your Core Skills" subtitle="Step 2 of 5">
      <div className="glass-card" style={{ padding: '32px', maxWidth: '620px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <Input label="Add Skill" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="e.g. React, Node.js, Python..." />
          <Button type="button" variant="secondary" onClick={addSkill} style={{ alignSelf: 'flex-end', minWidth: '120px' }}>Add</Button>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '20px 0' }}>
          {skills.map((skill) => (
            <span key={skill} style={{ display: 'inline-flex', alignItems: 'center', padding: '8px 12px', borderRadius: '999px', background: 'rgba(37,99,235,0.08)', color: '#1d4ed8', fontWeight: 600 }}>{skill}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
          <Button variant="secondary" type="button" onClick={() => navigate('/onboarding/basic-information')}>Back</Button>
          <Button variant="gradient" type="button" onClick={() => navigate('/onboarding/resume-upload')}>Next: Upload Resume</Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Skills;
