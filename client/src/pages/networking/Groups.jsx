import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Badge from '../../components/common/Badge';

export const Groups = () => {
  return (
    <PageContainer title="Tech Interest Groups">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#fff', fontWeight: 700 }}>AI Engineering & LLM Architecture Hub</h4>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '4px 0 12px' }}>12,400 Members worldwide</p>
        <Badge variant="info">Join Group</Badge>
      </div>
    </PageContainer>
  );
};

export default Groups;
