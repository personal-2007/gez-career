import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { useAuth } from '../../hooks/useAuth';

export const ChatWindow = ({ chat }) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([
    { id: '1', sender: 'them', text: 'Hi! Thank you for applying. We reviewed your fresher application and ATS resume.' },
    { id: '2', sender: 'them', text: 'We would love to schedule a technical chat for the role!' },
    { id: '3', sender: 'me', text: 'Thank you! I am very excited and available for an interview this week.' }
  ]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(window.location.origin, { path: '/socket.io', autoConnect: true });
    setSocket(newSocket);

    const roomId = chat?.id ? `chat_${chat.id}` : 'global';
    newSocket.emit('join_room', roomId);

    newSocket.on('receive_message', (data) => {
      if (data.senderId !== user?.id) {
        setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'them', text: data.text }]);
      }
    });

    return () => {
      newSocket.disconnect();
    };
  }, [chat?.id]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    const msgObj = { id: Date.now().toString(), sender: 'me', text };
    setMessages(prev => [...prev, msgObj]);

    if (socket) {
      const roomId = chat?.id ? `chat_${chat.id}` : 'global';
      socket.emit('send_message', { room: roomId, text, senderId: user?.id || 'me' });
    }
  };

  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '550px', background: '#fff' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ color: '#0f172a', fontWeight: 700, margin: 0, fontSize: '1.1rem' }}>{chat?.name || 'Recruiter Inbox'}</h3>
          <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 600 }}>● Online</span>
        </div>
      </div>

      <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fafc' }}>
        {messages.map(m => (
          <MessageBubble key={m.id} message={m} />
        ))}
      </div>

      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;

