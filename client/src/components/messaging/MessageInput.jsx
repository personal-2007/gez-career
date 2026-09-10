import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../common/Button';

export const MessageInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend && onSend(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '10px' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 14px', color: '#fff', outline: 'none' }}
      />
      <Button type="submit" variant="gradient"><Send size={16} /></Button>
    </form>
  );
};

export default MessageInput;
