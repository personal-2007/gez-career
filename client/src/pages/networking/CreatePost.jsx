import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import CreatePostComp from '../../components/networking/CreatePost';

export const CreatePostPage = () => {
  return (
    <PageContainer title="Publish Update to Network">
      <CreatePostComp />
    </PageContainer>
  );
};

export default CreatePostPage;
