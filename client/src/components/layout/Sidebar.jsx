import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Search, Briefcase, Users, MessageCircle, Bell, User, DollarSign, BookOpen, Settings, Sparkles } from 'lucide-react';

export const Sidebar = ({ collapsed = false, open = false, onNavigate }) => {
  const menuItems = [
    { label: 'Home', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Jobs', path: '/jobs/search', icon: Search },
    { label: 'Applications', path: '/applications/me', icon: Briefcase },
    { label: 'Network', path: '/networking/feed', icon: Users },
    { label: 'Messages', path: '/messages', icon: MessageCircle },
    { label: 'Notifications', path: '/notifications', icon: Bell },
    { label: 'Career Tools', path: '/ai/assistant', icon: Sparkles },
    { label: 'Profile', path: '/profile/me', icon: User },
    { label: 'Salary', path: '/salary/explorer', icon: DollarSign },
    { label: 'Learning', path: '/learning/home', icon: BookOpen },
    { label: 'Settings', path: '/settings', icon: Settings }
  ];

  return (
    <aside className={`app-sidebar${collapsed ? ' is-collapsed' : ''}${open ? ' is-open' : ''}`} style={{
      width: '240px',
      minHeight: 'calc(100vh - 70px)',
      background: 'rgba(255,255,255,0.72)',
      backdropFilter: 'blur(12px)',
      borderRight: '1px solid rgba(148, 163, 184, 0.22)',
      padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '6px'
    }}>
      <div className="sidebar-heading" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', paddingLeft: '12px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Navigation
      </div>
      {menuItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={idx}
            to={item.path}
            onClick={onNavigate}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '10px 14px', borderRadius: '12px',
              fontSize: '0.875rem', fontWeight: isActive ? 600 : 500,
              color: isActive ? '#2563eb' : '#475569',
              background: isActive ? '#eff6ff' : 'transparent',
              border: isActive ? '1px solid rgba(37,99,235,0.15)' : '1px solid transparent',
              transition: 'all 0.2s ease', textDecoration: 'none'
            })}
          >
            <Icon size={18} />
            <span className="sidebar-label">{item.label}</span>
          </NavLink>
        );
      })}
    </aside>
  );
};

export default Sidebar;

