import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

export const WriteReview = () => {
  return (
    <PageContainer title="Write Anonymized Company Review">
      <div className="glass-card" style={{ padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
        <Input label="Company Name" placeholder="Nexus AI Tech" />
        <Input label="Review Headline" placeholder="Great culture and fast-paced tech" style={{ marginTop: '12px' }} />
        <Button variant="gradient" style={{ marginTop: '20px' }}>Submit Review</Button>
      </div>
    </PageContainer>
  );
};

export default WriteReview;
