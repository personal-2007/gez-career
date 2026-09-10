import React from 'react';

export const PageContainer = ({ title, subtitle, children, action }) => {
  return (
    <div style={{ flex: 1, padding: '32px 28px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
      {(title || subtitle || action) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
          <div>
            {title && <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em' }}>{title}</h1>}
            {subtitle && <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '4px' }}>{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

export default PageContainer;
