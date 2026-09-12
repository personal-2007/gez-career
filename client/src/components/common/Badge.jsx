import React from 'react';

export const Badge = ({ children, variant = 'info' }) => {
  const colors = {
    info: '#eff6ff',
    skill: '#f3e8ff',
    match: '#dbeafe',
    success: '#ecfdf5',
    workMode: '#ecfeff',
    jobType: '#fffbeb',
    warning: '#fffbeb',
    danger: '#fef2f2',
    neutral: '#f1f5f9'
  };

  const textColors = {
    info: '#1d4ed8',
    skill: '#7e22ce',
    match: '#1e40af',
    success: '#047857',
    workMode: '#0f766e',
    jobType: '#a16207',
    warning: '#a16207',
    danger: '#b91c1c',
    neutral: '#475569'
  };

  return (
    <span style={{
      background: colors[variant] || colors.info,
      color: textColors[variant] || textColors.info,
      border: `1px solid ${variant === 'skill' ? '#e9d5ff' : variant === 'jobType' || variant === 'warning' ? '#fde68a' : variant === 'success' ? '#a7f3d0' : variant === 'danger' ? '#fecaca' : '#bfdbfe'}`,
      padding: '3px 10px',
      borderRadius: '6px',
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
