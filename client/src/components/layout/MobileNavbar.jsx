import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Search, Users, MessageCircle, User } from 'lucide-react';

export const MobileNavbar = () => {
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      height: '64px', background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(148,163,184,0.24)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      zIndex: 100
    }} className="hide-desktop">
      <NavLink aria-label="Home" to="/dashboard" style={({ isActive }) => ({ color: isActive ? '#2563eb' : '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '48px', minHeight: '48px' })}><LayoutDashboard size={20} /></NavLink>
      <NavLink aria-label="Jobs" to="/jobs/search" style={({ isActive }) => ({ color: isActive ? '#2563eb' : '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '48px', minHeight: '48px' })}><Search size={20} /></NavLink>
      <NavLink aria-label="Network" to="/networking/feed" style={({ isActive }) => ({ color: isActive ? '#2563eb' : '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '48px', minHeight: '48px' })}><Users size={20} /></NavLink>
      <NavLink aria-label="Messages" to="/messages" style={({ isActive }) => ({ color: isActive ? '#2563eb' : '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '48px', minHeight: '48px' })}><MessageCircle size={20} /></NavLink>
      <NavLink aria-label="Profile" to="/profile/me" style={({ isActive }) => ({ color: isActive ? '#2563eb' : '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '48px', minHeight: '48px' })}><User size={20} /></NavLink>
    </div>
  );
};

export default MobileNavbar;
