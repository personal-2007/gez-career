import React from 'react';
import Avatar from '../common/Avatar';

export const ChatList = ({ chats = [], activeChat, onSelectChat }) => {
  const defaultChats = [
    { id: '1', name: 'Elena Rostova (Recruiter)', lastMessage: 'Would love to schedule a technical chat!', time: '10m ago' },
    { id: '2', name: 'David Chen', lastMessage: 'Thanks for sharing the GEZ AI demo!', time: '1d ago' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(chats.length > 0 ? chats : defaultChats).map(chat => (
        <div
          key={chat.id}
          onClick={() => onSelectChat && onSelectChat(chat)}
          style={{
            padding: '12px 14px', borderRadius: '10px', cursor: 'pointer',
            background: activeChat?.id === chat.id ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255,255,255,0.03)',
            border: activeChat?.id === chat.id ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid transparent',
            display: 'flex', gap: '12px', alignItems: 'center'
          }}
        >
          <Avatar name={chat.name} size="md" />
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4 style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: 600 }}>{chat.name}</h4>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{chat.time}</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.8rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
