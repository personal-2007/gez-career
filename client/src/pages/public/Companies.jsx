import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import CompanySearch from '../companies/CompanySearch';

export const Companies = () => {
  return (
    <PageContainer title="Top Employers & Tech Companies" subtitle="Discover verified company ratings, benefits, and active openings.">
      <CompanySearch />
    </PageContainer>
  );
};

export default Companies;
