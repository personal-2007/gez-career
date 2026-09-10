import React from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

export const ResetPassword = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div className="glass-card" style={{ padding: '36px', width: '100%', maxWidth: '440px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '16px' }}>Set New Password</h2>
        <Input label="New Password" type="password" />
        <Input label="Confirm New Password" type="password" style={{ marginTop: '12px' }} />
        <Button variant="gradient" style={{ width: '100%', marginTop: '20px' }}>Update Password</Button>
      </div>
    </div>
  );
};

export default ResetPassword;
