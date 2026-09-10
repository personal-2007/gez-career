import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, FileText } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

export const ResumeUpload = () => {
  const navigate = useNavigate();
  return (
    <PageContainer title="Upload Resume for ATS Audit" subtitle="Step 3 of 5">
      <div className="glass-card" style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          border: '2px dashed rgba(99,102,241,0.4)', borderRadius: '16px', padding: '36px',
          background: 'rgba(99,102,241,0.05)', marginBottom: '24px', cursor: 'pointer'
        }}>
          <UploadCloud size={48} color="#818cf8" style={{ marginBottom: '12px' }} />
          <h4 style={{ color: '#fff', marginBottom: '6px' }}>Drag & Drop PDF Resume</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Supports PDF, DOCX (Max 5MB)</p>
        </div>

        <Button variant="gradient" onClick={() => navigate('/onboarding/complete')} style={{ width: '100%' }}>
          Run AI ATS Analysis
        </Button>
      </div>
    </PageContainer>
  );
};

export default ResumeUpload;
