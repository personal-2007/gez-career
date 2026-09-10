import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ChatWindow from '../../components/messaging/ChatWindow';

export const ChatPage = () => {
  return (
    <PageContainer title="Chat Thread">
      <ChatWindow />
    </PageContainer>
  );
};

export default ChatPage;
