import React from 'react';

export const MessageBubble = ({ message }) => {
  const isMe = message.sender === 'me';

  return (
    <div style={{
      alignSelf: isMe ? 'flex-end' : 'flex-start',
      background: isMe ? 'linear-gradient(135deg, #6366f1, #a855f7)' : 'rgba(255,255,255,0.06)',
      padding: '10px 16px', borderRadius: '12px',
      color: '#fff', fontSize: '0.875rem', maxWidth: '75%'
    }}>
      {message.text}
    </div>
  );
};

export default MessageBubble;
