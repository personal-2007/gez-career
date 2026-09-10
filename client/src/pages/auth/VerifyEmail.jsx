import React from 'react';
import { MailCheck } from 'lucide-react';
import Button from '../../components/common/Button';

export const VerifyEmail = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
      <div className="glass-card" style={{ padding: '36px', maxWidth: '440px' }}>
        <MailCheck size={48} color="#10b981" style={{ marginBottom: '16px' }} />
        <h2 style={{ color: '#fff' }}>Verify Your Email</h2>
        <p style={{ color: '#94a3b8', margin: '12px 0 24px' }}>We sent a verification link to your inbox.</p>
        <Button variant="gradient" style={{ width: '100%' }}>Resend Email</Button>
      </div>
    </div>
  );
};

export default VerifyEmail;
