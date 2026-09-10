import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import AIChat from '../../components/ai/AIChat';

export const CareerAssistant = () => {
  return (
    <PageContainer title="GEZ AI Copilot" subtitle="Your 24/7 personal career advisor, salary negotiator, and interview coach.">
      <AIChat />
    </PageContainer>
  );
};

export default CareerAssistant;
