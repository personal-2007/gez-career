import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Sparkles } from 'lucide-react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email.trim(), password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Unable to sign in. Check your details and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: 'linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%)' }}>
      <div className="glass-card" style={{ padding: '36px', width: '100%', maxWidth: '440px', borderRadius: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '14px',
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px'
          }}>
            <Sparkles size={24} color="#fff" />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>Welcome back</h2>
          <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: '6px' }}>Sign in to continue your global career journey.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Email Address" icon={Mail} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
          <Input label="Password" icon={Lock} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter password" />

          {error && (
            <div role="alert" style={{ border: '1px solid #fecaca', background: '#fef2f2', color: '#b91c1c', borderRadius: '8px', padding: '10px 12px', fontSize: '0.85rem' }}>
              {error}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem' }}>
            <Link to="/auth/forgot-password" style={{ color: '#2563eb', fontWeight: 600 }}>Forgot password?</Link>
            <button type="button" style={{ background: 'transparent', border: 'none', color: '#475569', cursor: 'pointer' }}>Remember me</button>
          </div>

          <Button type="submit" variant="gradient" size="lg" disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </Button>

          <Button type="button" variant="secondary" size="lg">
            Continue with Google
          </Button>
        </form>

        <p style={{ textAlign: 'center', color: '#475569', fontSize: '0.85rem', marginTop: '24px' }}>
          Don’t have an account? <Link to="/auth/signup" style={{ color: '#2563eb', fontWeight: 700 }}>Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
