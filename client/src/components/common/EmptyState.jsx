import React from 'react';
import { FolderOpen } from 'lucide-react';

export const EmptyState = ({ title = 'No data found', message = 'Check back later or adjust your filters.' }) => {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94a3b8' }}>
      <FolderOpen size={48} style={{ opacity: 0.4, marginBottom: '12px' }} />
      <h4 style={{ color: '#f1f5f9', marginBottom: '4px' }}>{title}</h4>
      <p style={{ fontSize: '0.875rem' }}>{message}</p>
    </div>
  );
};

export default EmptyState;
