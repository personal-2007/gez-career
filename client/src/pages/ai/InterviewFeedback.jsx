import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import InterviewFeedbackComp from '../../components/ai/InterviewFeedback';

export const AIInterviewFeedback = () => {
  return (
    <PageContainer title="Mock Interview Results & Feedback">
      <InterviewFeedbackComp />
    </PageContainer>
  );
};

export default AIInterviewFeedback;
