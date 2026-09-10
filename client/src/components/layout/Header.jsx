import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, Sparkles, User, Briefcase } from 'lucide-react';
import Avatar from '../common/Avatar';
import Badge from '../common/Badge';

export const Header = () => {
  return (
    <header style={{
      height: '70px',
      background: 'rgba(7, 9, 19, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Sparkles size={22} color="#fff" />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', fontFamily: 'Space Grotesk, sans-serif' }}>
            GEZ<span style={{ color: '#818cf8' }}>CAREER</span>
          </span>
        </Link>

        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '10px', color: '#64748b' }} />
          <input
            type="text"
            placeholder="Search jobs, skills, companies or AI prompts..."
            style={{
              width: '100%', padding: '8px 12px 8px 36px', borderRadius: '20px',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
              color: '#fff', fontSize: '0.85rem', outline: 'none'
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link to="/ai/assistant" className="glass-pill" style={{ background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.4)' }}>
          <Sparkles size={14} color="#818cf8" />
          <span style={{ color: '#c7d2fe', fontWeight: 600 }}>AI Suite</span>
        </Link>

        <Link to="/recruiter/dashboard" style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Briefcase size={16} /> Recruiter Portal
        </Link>

        <Link to="/notifications" style={{ position: 'relative', color: '#94a3b8' }}>
          <Bell size={20} />
          <span style={{
            position: 'absolute', top: '-2px', right: '-2px',
            width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444'
          }} />
        </Link>

        <Link to="/profile/me">
          <Avatar name="Alex Rivera" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" size="sm" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
