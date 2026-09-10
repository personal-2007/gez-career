import React from 'react';
import { UserPlus } from 'lucide-react';
import Avatar from '../common/Avatar';
import Button from '../common/Button';

export const UserCard = ({ user }) => {
  return (
    <div className="glass-card" style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <Avatar name={user?.name || 'Dev Candidate'} src={user?.avatar} size="lg" />
      <div>
        <h4 style={{ color: '#f8fafc', fontWeight: 700 }}>{user?.name || 'Sarah Lin'}</h4>
        <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{user?.title || 'Staff AI Engineer at OpenAI'}</p>
      </div>
      <Button variant="secondary" size="sm" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
        <UserPlus size={14} /> Connect
      </Button>
    </div>
  );
};

export default UserCard;
