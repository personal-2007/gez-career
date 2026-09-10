import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const ErrorState = ({ message = 'Something went wrong. Please try again.' }) => {
  return (
    <div style={{ textAlign: 'center', padding: '30px 20px', color: '#ef4444' }}>
      <AlertTriangle size={42} style={{ marginBottom: '10px' }} />
      <p style={{ fontWeight: 600 }}>{message}</p>
    </div>
  );
};

export default ErrorState;
