import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Search, Briefcase, Bot, User } from 'lucide-react';

export const MobileNavbar = () => {
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      height: '60px', background: 'rgba(7, 9, 19, 0.95)',
      backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(255,255,255,0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      zIndex: 100
    }} className="hide-desktop">
      <NavLink to="/dashboard" style={{ color: '#94a3b8' }}><LayoutDashboard size={20} /></NavLink>
      <NavLink to="/jobs/search" style={{ color: '#94a3b8' }}><Search size={20} /></NavLink>
      <NavLink to="/applications/me" style={{ color: '#94a3b8' }}><Briefcase size={20} /></NavLink>
      <NavLink to="/ai/assistant" style={{ color: '#94a3b8' }}><Bot size={20} /></NavLink>
      <NavLink to="/profile/me" style={{ color: '#94a3b8' }}><User size={20} /></NavLink>
    </div>
  );
};

export default MobileNavbar;
