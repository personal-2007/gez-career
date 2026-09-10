import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

export const ForgotPassword = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div className="glass-card" style={{ padding: '36px', width: '100%', maxWidth: '440px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '8px' }}>Reset Password</h2>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '24px' }}>Enter your email to receive a password reset link.</p>
        <Input label="Email Address" placeholder="alex@example.com" />
        <Button variant="gradient" style={{ width: '100%', marginTop: '16px' }}>Send Link</Button>
        <p style={{ marginTop: '20px', fontSize: '0.85rem' }}><Link to="/auth/login" style={{ color: '#818cf8' }}>Back to Sign In</Link></p>
      </div>
    </div>
  );
};

export default ForgotPassword;
