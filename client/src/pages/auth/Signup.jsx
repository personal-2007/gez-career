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
  const [country, setCountry] = useState('');
  const [accountType, setAccountType] = useState('Job Seeker');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/onboarding/welcome');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: 'linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%)' }}>
      <div className="glass-card" style={{ padding: '36px', width: '100%', maxWidth: '480px', borderRadius: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>Create account</h2>
          <p style={{ color: '#475569', fontSize: '0.9rem' }}>Join your global career network.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Full Name" icon={User} value={name} onChange={(e) => setName(e.target.value)} required placeholder="Jane Doe" />
          <Input label="Email Address" icon={Mail} value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
          <Input label="Password" icon={Lock} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Create a password" />
          <Input label="Country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="United States" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}>Account Type</label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'rgba(15, 23, 42, 0.04)',
                border: '1px solid rgba(148, 163, 184, 0.4)',
                borderRadius: '10px',
                padding: '12px 14px',
                color: '#0f172a',
                fontSize: '0.95rem'
              }}
            >
              <option>Job Seeker</option>
              <option>Recruiter</option>
            </select>
          </div>

          <Button type="submit" variant="gradient" size="lg">Continue to onboarding</Button>
          <Button type="button" variant="secondary" size="lg">Continue with Google</Button>
        </form>

        <p style={{ textAlign: 'center', color: '#475569', fontSize: '0.85rem', marginTop: '24px' }}>
          Already registered? <Link to="/auth/login" style={{ color: '#2563eb', fontWeight: 700 }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
