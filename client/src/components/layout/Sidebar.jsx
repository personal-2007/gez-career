import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Search, Briefcase, FileText, Bot, Users, DollarSign, BookOpen, Settings } from 'lucide-react';

export const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Job Search', path: '/jobs/search', icon: Search },
    { label: 'My Applications', path: '/applications/me', icon: Briefcase },
    { label: 'My Profile & ATS', path: '/profile/me', icon: FileText },
    { label: 'AI Career Suite', path: '/ai/assistant', icon: Bot },
    { label: 'Global Network', path: '/networking/feed', icon: Users },
    { label: 'Salary Insights', path: '/salary/explorer', icon: DollarSign },
    { label: 'Learning Center', path: '/learning/home', icon: BookOpen },
    { label: 'Account Settings', path: '/settings', icon: Settings }
  ];

  return (
    <aside className="app-sidebar" style={{
      width: '240px', minHeight: 'calc(100vh - 70px)',
      background: 'rgba(12, 16, 28, 0.75)',
      backdropFilter: 'blur(12px)',
      borderRight: '1px solid rgba(255, 255, 255, 0.06)',
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
              padding: '10px 14px', borderRadius: '10px',
              fontSize: '0.875rem', fontWeight: isActive ? 600 : 500,
              color: isActive ? '#fff' : '#94a3b8',
              background: isActive ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(168, 85, 247, 0.15))' : 'transparent',
              border: isActive ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent',
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
