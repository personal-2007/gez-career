import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ResumeScore from '../../components/ai/ResumeScore';

export const ResumeAnalyzer = () => {
  return (
    <PageContainer title="ATS Resume Analyzer & Keyword Auditor">
      <ResumeScore score={88} />
    </PageContainer>
  );
};

export default ResumeAnalyzer;
