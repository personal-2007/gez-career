import React from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

export const OTPVerification = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div className="glass-card" style={{ padding: '36px', maxWidth: '440px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', marginBottom: '8px' }}>Security Verification</h2>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '20px' }}>Enter 6-digit authentication code sent to your device.</p>
        <Input placeholder="123456" style={{ textAlign: 'center', letterSpacing: '0.2em', fontSize: '1.2rem' }} />
        <Button variant="gradient" style={{ width: '100%', marginTop: '20px' }}>Verify Code</Button>
      </div>
    </div>
  );
};

export default OTPVerification;
