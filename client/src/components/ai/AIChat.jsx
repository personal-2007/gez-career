import React, { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import AIMessage from './AIMessage';
import Button from '../common/Button';

export const AIChat = () => {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello Alex! I am your GEZ AI Career Assistant. How can I optimize your job application or interview readiness today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      let replyText = "Based on market data for Senior Full Stack roles, highlighting production experience with AI agents, React micro-frontends, and vector search will place your profile in the top 5% of applicants.";
      if (input.toLowerCase().includes('salary')) {
        replyText = "In San Francisco, median compensation for Senior AI Full Stack Engineers is $185,000 + equity. Always request a written offer breakdown including stock vesting schedule.";
      }
      setMessages(prev => [...prev, { sender: 'ai', text: replyText }]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '550px' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Sparkles size={20} color="#818cf8" />
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>GEZ Career Copilot</h3>
      </div>

      <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {messages.map((msg, idx) => (
          <AIMessage key={idx} message={msg} />
        ))}
        {loading && <div style={{ color: '#818cf8', fontSize: '0.85rem', fontStyle: 'italic' }}>AI Copilot thinking...</div>}
      </div>

      <form onSubmit={handleSend} style={{ padding: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '10px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about salary, resume, or interview prep..."
          style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 14px', color: '#fff', outline: 'none' }}
        />
        <Button type="submit" variant="gradient"><Send size={16} /></Button>
      </form>
    </div>
  );
};

export default AIChat;
