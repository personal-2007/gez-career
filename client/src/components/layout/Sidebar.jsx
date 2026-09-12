import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Search, Briefcase, FileText, Bot, Users, DollarSign, BookOpen, Settings } from 'lucide-react';

export const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Job Search', path: '/jobs/search', icon: Search },
    { label: 'My Applications', path: '/applications/me', icon: Briefcase },
    { label: 'My Profile', path: '/profile/me', icon: FileText },
    { label: 'AI Suite', path: '/ai/assistant', icon: Bot },
    { label: 'Network', path: '/networking/feed', icon: Users },
    { label: 'Salary', path: '/salary/explorer', icon: DollarSign },
    { label: 'Learning', path: '/learning/home', icon: BookOpen },
    { label: 'Settings', path: '/settings', icon: Settings }
  ];

  return (
    <aside className="app-sidebar" style={{
      width: '240px',
      minHeight: 'calc(100vh - 70px)',
      background: 'rgba(255,255,255,0.72)',
      backdropFilter: 'blur(12px)',
      borderRight: '1px solid rgba(148, 163, 184, 0.22)',
      padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '6px'
    }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', paddingLeft: '12px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Navigation
      </div>
      {menuItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={idx}
            to={item.path}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '10px 14px', borderRadius: '12px',
              fontSize: '0.875rem', fontWeight: isActive ? 600 : 500,
              color: isActive ? '#0f172a' : '#475569',
              background: isActive ? 'linear-gradient(135deg, rgba(37,99,235,0.10), rgba(124,58,237,0.08))' : 'transparent',
              border: isActive ? '1px solid rgba(37,99,235,0.15)' : '1px solid transparent',
              transition: 'all 0.2s ease'
            })}
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </aside>
  );
};

export default Sidebar;
