import React from 'react';
import { MessageCircle } from 'lucide-react';
import Avatar from '../common/Avatar';
import Button from '../common/Button';

export const ConnectionCard = ({ connection }) => {
  return (
    <div className="glass-card" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Avatar name={connection?.name || 'David Chen'} src={connection?.avatar} size="md" />
        <div>
          <h4 style={{ color: '#f8fafc', fontWeight: 600 }}>{connection?.name || 'David Chen'}</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{connection?.title || 'Engineering Lead at Stripe'}</p>
        </div>
      </div>
      <Button variant="secondary" size="sm"><MessageCircle size={16} /></Button>
    </div>
  );
};

export default ConnectionCard;
