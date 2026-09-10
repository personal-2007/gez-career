import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ChatList from '../../components/messaging/ChatList';
import ChatWindow from '../../components/messaging/ChatWindow';

export const Messages = () => {
  const [activeChat, setActiveChat] = useState({ id: '1', name: 'Elena Rostova (Recruiter at Nexus AI Tech)' });

  return (
    <PageContainer title="Direct Messages & Recruiter Inbox" subtitle="Communicate directly with hiring managers and technical leads.">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '20px' }}>
        <ChatList activeChat={activeChat} onSelectChat={(c) => setActiveChat(c)} />
        <ChatWindow chat={activeChat} />
      </div>
    </PageContainer>
  );
};

export default Messages;
