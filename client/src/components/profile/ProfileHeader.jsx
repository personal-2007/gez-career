import React from 'react';
import { MapPin, Mail, Sparkles, Edit3 } from 'lucide-react';
import Avatar from '../common/Avatar';
import Button from '../common/Button';

export const ProfileHeader = ({ profile }) => {
  return (
    <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Avatar name={profile?.name || 'Alex Rivera'} src={profile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200'} size="lg" />
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc' }}>{profile?.name || 'Alex Rivera'}</h2>
          <p style={{ color: '#818cf8', fontWeight: 600 }}>{profile?.title || 'Senior Full Stack & AI Specialist'}</p>
          <div style={{ display: 'flex', gap: '16px', color: '#94a3b8', fontSize: '0.85rem', marginTop: '6px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {profile?.location || 'San Francisco, CA'}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Mail size={14} /> {profile?.email || 'alex.developer@gezcareer.com'}</span>
          </div>
        </div>
      </div>

      <Button variant="outline" size="sm" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Edit3 size={16} /> Edit Profile
      </Button>
    </div>
  );
};

export default ProfileHeader;
