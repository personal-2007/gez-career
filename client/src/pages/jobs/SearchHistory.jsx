import React from 'react';
import PageContainer from '../../components/layout/PageContainer';

export const SearchHistory = () => {
  return (
    <PageContainer title="Recent Job Search History">
      <div className="glass-card" style={{ padding: '24px' }}>
        <p style={{ color: '#cbd5e1' }}>• "React Node.js AI" in San Francisco, CA (2 hours ago)</p>
        <p style={{ color: '#cbd5e1', marginTop: '8px' }}>• "Lead UI/UX Designer" in London, UK (Yesterday)</p>
      </div>
    </PageContainer>
  );
};

export default SearchHistory;
