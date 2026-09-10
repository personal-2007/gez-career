import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import JobDetailsComp from '../../components/jobs/JobDetails';

export const JobDetailsPage = () => {
  const mockJob = {
    id: 'job_101',
    title: 'Senior Full Stack AI Engineer',
    company: { name: 'Nexus AI Tech', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150' },
    location: 'San Francisco, CA',
    salaryRange: '$160,000 - $210,000 / yr',
    postedAt: '2 hours ago',
    description: 'Spearhead our next-generation automated LLM career workflows using React, Node.js, and Vector Databases.',
    skills: ['React', 'Node.js', 'Python', 'LLM']
  };

  return (
    <PageContainer title="Job Details">
      <JobDetailsComp job={mockJob} />
    </PageContainer>
  );
};

export default JobDetailsPage;
