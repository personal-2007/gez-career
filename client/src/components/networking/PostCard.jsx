import React from 'react';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';
import Avatar from '../common/Avatar';

export const PostCard = ({ post }) => {
  return (
    <div className="glass-card" style={{ padding: '20px', marginBottom: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px' }}>
        <Avatar name={post?.author || 'Elena Rostova'} src={post?.avatar} size="md" />
        <div>
          <h4 style={{ color: '#f8fafc', fontWeight: 700 }}>{post?.author || 'Elena Rostova'}</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{post?.time || '3h ago'} • Public</p>
        </div>
      </div>

      <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: '1.5', marginBottom: '16px' }}>
        {post?.content || 'Excited to announce that Nexus AI Tech is expanding our San Francisco and Remote engineering teams! We are hiring Senior Full Stack AI Engineers.'}
      </p>

      <div style={{ display: 'flex', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px', color: '#94a3b8', fontSize: '0.85rem' }}>
        <button style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ThumbsUp size={16} /> 42 Likes
        </button>
        <button style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MessageSquare size={16} /> 8 Comments
        </button>
      </div>
    </div>
  );
};

export default PostCard;
