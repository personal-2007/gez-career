import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import CompanyReviews from '../companies/CompanyReviews';

export const Reviews = () => {
  return (
    <PageContainer title="Verified Company & Interview Reviews" subtitle="Honest feedback from engineers and product managers worldwide.">
      <CompanyReviews />
    </PageContainer>
  );
};

export default Reviews;
