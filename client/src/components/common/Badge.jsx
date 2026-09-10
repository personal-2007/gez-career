import React from 'react';

export const Badge = ({ children, variant = 'info' }) => {
  const colors = {
    info: 'rgba(99, 102, 241, 0.25)',
    success: 'rgba(16, 185, 129, 0.25)',
    warning: 'rgba(245, 158, 11, 0.25)',
    danger: 'rgba(239, 68, 68, 0.25)'
  };

  const textColors = {
    info: '#a5b4fc',
    success: '#6ee7b7',
    warning: '#fcd34d',
    danger: '#fca5a5'
  };

  return (
    <span style={{
      background: colors[variant] || colors.info,
      color: textColors[variant] || textColors.info,
      padding: '3px 10px',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    }}>
      {children}
    </span>
  );
};

export default Badge;
