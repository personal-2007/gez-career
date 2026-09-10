import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import PostCard from '../../components/networking/PostCard';

export const PostDetails = () => {
  return (
    <PageContainer title="Post Thread & Comments">
      <PostCard />
    </PageContainer>
  );
};

export default PostDetails;
