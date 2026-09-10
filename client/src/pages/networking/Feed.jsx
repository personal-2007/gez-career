import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import CreatePostComp from '../../components/networking/CreatePost';
import PostCard from '../../components/networking/PostCard';
import UserCard from '../../components/networking/UserCard';

export const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: '1', author: 'Elena Rostova', time: '2h ago',
      content: 'We are officially expanding our AI engineering hub in San Francisco! Looking for Senior React & Node developers passionate about LLM agent workflows.'
    },
    {
      id: '2', author: 'David Chen', time: 'Yesterday',
      content: 'Just published our open-source vector similarity benchmarking suite! Check out how cosine distance scales in multi-tenant environments.'
    }
  ]);

  const handlePost = (text) => {
    setPosts(prev => [{ id: Date.now().toString(), author: 'Alex Rivera', time: 'Just now', content: text }, ...prev]);
  };

  return (
    <PageContainer title="Global Community Feed" subtitle="Connect, share technical insights, and discover hiring announcements.">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div>
          <CreatePostComp onPost={handlePost} />
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ color: '#f8fafc', fontWeight: 700 }}>Recommended Connections</h4>
          <UserCard user={{ name: 'Sarah Lin', title: 'Staff AI Engineer at OpenAI' }} />
          <UserCard user={{ name: 'Marcus Vance', title: 'Director of Tech at Stripe' }} />
        </div>
      </div>
    </PageContainer>
  );
};

export default Feed;
