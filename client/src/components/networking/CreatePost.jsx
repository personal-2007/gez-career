import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';
import Button from '../common/Button';

export const CreatePost = ({ onPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onPost && onPost(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '20px', marginBottom: '20px' }}>
      <textarea
        placeholder="Share a career update, technical insight, or job opportunity..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
        style={{
          width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '10px', padding: '12px', color: '#fff', outline: 'none', resize: 'none'
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
        <button type="button" style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Image size={18} /> Add Media
        </button>
        <Button type="submit" variant="gradient" size="sm">Post Updates</Button>
      </div>
    </form>
  );
};

export default CreatePost;
