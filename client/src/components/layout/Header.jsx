import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, Briefcase, MessageCircle, Menu, PanelLeftClose, PanelLeftOpen, X, ShieldAlert } from 'lucide-react';
import Avatar from '../common/Avatar';
import Logo from '../common/Logo';
import { useAuth } from '../../hooks/useAuth';

export const Header = ({ sidebarCollapsed, sidebarOpen, onToggleSidebar }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/jobs/search?keyword=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const displayName = user?.name || 'Fresher Developer';
  const displayAvatar = user?.avatar || '';
  const userRole = user?.role || 'candidate';

  return (
    <header style={{
      height: '70px',
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(148, 163, 184, 0.22)',
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', width: '100%' }}>
        <button
          type="button"
          className="sidebar-toggle"
          aria-label={sidebarOpen ? 'Close navigation' : sidebarCollapsed ? 'Expand navigation' : 'Minimize navigation'}
          title={sidebarOpen ? 'Close navigation' : sidebarCollapsed ? 'Expand navigation' : 'Minimize navigation'}
          onClick={onToggleSidebar}
        >
          <span className="sidebar-toggle-desktop">
            {sidebarCollapsed ? <PanelLeftOpen size={19} /> : <PanelLeftClose size={19} />}
          </span>
          <span className="sidebar-toggle-mobile">
            {sidebarOpen ? <X size={21} /> : <Menu size={21} />}
          </span>
        </button>
        <Logo to="/dashboard" />

        <div style={{ position: 'relative', width: 'min(420px, 40vw)', minWidth: '180px', flex: 1 }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '10px', color: '#64748b' }} />
          <input
            type="text"
            placeholder="Search jobs, skills, companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            style={{
              width: '100%', padding: '9px 12px 9px 36px', borderRadius: '20px',
              background: 'rgba(15,23,42,0.04)', border: '1px solid rgba(148,163,184,0.25)',
              color: '#0f172a', fontSize: '0.85rem', outline: 'none'
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: '20px' }}>
        <Link to="/messages" aria-label="Messages" style={{ color: '#475569', display: 'flex' }}>
          <MessageCircle size={20} />
        </Link>

        {userRole === 'recruiter' || userRole === 'admin' ? (
          <Link to="/recruiter/dashboard" style={{ color: '#2563eb', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
            <Briefcase size={16} /> Recruiter Portal
          </Link>
        ) : (
          <Link to="/recruiter/dashboard" style={{ color: '#475569', fontSize: '0.875rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
            <Briefcase size={16} /> For Employers
          </Link>
        )}

        <Link to="/notifications" aria-label="Notifications" style={{ position: 'relative', color: '#475569' }}>
          <Bell size={20} />
          <span style={{
            position: 'absolute', top: '-2px', right: '-2px',
            width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444'
          }} />
        </Link>

        <Link to="/profile/me" style={{ textDecoration: 'none' }}>
          <Avatar name={displayName} src={displayAvatar} size="sm" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

