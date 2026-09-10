import React from 'react';
import { Bot, User } from 'lucide-react';

export const AIMessage = ({ message }) => {
  const isAI = message.sender === 'ai';
  return (
    <div style={{
      display: 'flex', gap: '10px',
      alignSelf: isAI ? 'flex-start' : 'flex-end',
      maxWidth: '80%'
    }}>
      {isAI && <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Bot size={18} color="#fff" /></div>}
      <div style={{
        background: isAI ? 'rgba(255,255,255,0.06)' : 'linear-gradient(135deg, #6366f1, #a855f7)',
        padding: '12px 16px', borderRadius: '14px', color: '#fff', fontSize: '0.9rem', lineHeight: '1.5'
      }}>
        {message.text}
      </div>
      {!isAI && <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#14b8a6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={18} color="#fff" /></div>}
    </div>
  );
};

export default AIMessage;
