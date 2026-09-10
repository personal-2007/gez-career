import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ChatList from '../../components/messaging/ChatList';

export const MessageRequests = () => {
  return (
    <PageContainer title="Pending Message Requests">
      <ChatList />
    </PageContainer>
  );
};

export default MessageRequests;
