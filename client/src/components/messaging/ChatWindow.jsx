import React, { useState } from 'react';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';

export const ChatWindow = ({ chat }) => {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'them', text: 'Hi Alex! We reviewed your profile and resume ATS score.' },
    { id: '2', sender: 'them', text: 'Would love to schedule a technical chat for the Senior Full Stack AI Engineer role!' },
    { id: '3', sender: 'me', text: 'Hi Elena! Thank you. I would be thrilled to connect. Does Thursday at 2 PM PST work?' }
  ]);

  const handleSend = (text) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'me', text }]);
  };

  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '550px' }}>
      <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <h3 style={{ color: '#f8fafc', fontWeight: 700 }}>{chat?.name || 'Elena Rostova (Nexus AI Tech)'}</h3>
      </div>

      <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {messages.map(m => (
          <MessageBubble key={m.id} message={m} />
        ))}
      </div>

      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
