import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import SkillGapComp from '../../components/ai/SkillGap';

export const CareerRoadmap = () => {
  return (
    <PageContainer title="Personalized 90-Day Career Transition Roadmap">
      <SkillGapComp targetRole="Principal AI Engineer & Tech Lead" />
    </PageContainer>
  );
};

export default CareerRoadmap;
