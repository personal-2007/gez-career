import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Sparkles } from 'lucide-react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/onboarding/welcome');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div className="glass-card" style={{ padding: '36px', width: '100%', maxWidth: '440px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>Create Account</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Join the AI-powered global career platform</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Full Name" icon={User} value={name} onChange={(e) => setName(e.target.value)} required />
          <Input label="Email Address" icon={Mail} value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input label="Password" icon={Lock} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <Button type="submit" variant="gradient" size="lg">Continue to Onboarding</Button>
        </form>

        <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem', marginTop: '24px' }}>
          Already registered? <Link to="/auth/login" style={{ color: '#818cf8', fontWeight: 600 }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
