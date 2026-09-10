import React from 'react';

export const Toast = ({ message, type = 'info', onClose }) => {
  return (
    <div className="glass-card" style={{
      position: 'fixed', bottom: '24px', right: '24px',
      padding: '12px 20px', borderRadius: '10px',
      borderLeft: '4px solid #6366f1', zIndex: 2000, color: '#fff'
    }}>
      {message}
    </div>
  );
};

export default Toast;
