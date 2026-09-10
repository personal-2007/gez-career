import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ChatWindow from '../../components/messaging/ChatWindow';

export const RecruiterChat = () => {
  return (
    <PageContainer title="Priority Recruiter Conversation">
      <ChatWindow chat={{ name: 'Elena Rostova (Nexus AI Tech)' }} />
    </PageContainer>
  );
};

export default RecruiterChat;
