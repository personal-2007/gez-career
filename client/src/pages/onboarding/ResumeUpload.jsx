import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, FileText } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const ResumeUpload = () => {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState('resume.pdf');

  return (
    <PageContainer title="Upload Resume for ATS Audit" subtitle="Step 3 of 5">
      <div className="glass-card" style={{ padding: '40px', maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          border: '2px dashed rgba(37,99,235,0.4)', borderRadius: '16px', padding: '36px',
          background: 'rgba(37,99,235,0.05)', marginBottom: '24px', cursor: 'pointer'
        }}>
          <UploadCloud size={48} color="#2563eb" style={{ marginBottom: '12px' }} />
          <h4 style={{ color: '#0f172a', marginBottom: '6px' }}>Drag & Drop PDF Resume</h4>
          <p style={{ color: '#475569', fontSize: '0.85rem' }}>Supports PDF, DOCX (Max 5MB)</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '20px', color: '#0f172a', fontWeight: 600 }}>
          <FileText size={18} color="#2563eb" />
          {fileName}
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
          <Button variant="secondary" type="button" onClick={() => navigate('/onboarding/skills')}>Back</Button>
          <Button variant="gradient" type="button" onClick={() => navigate('/onboarding/career-preferences')}>Next: Preferences</Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default ResumeUpload;
