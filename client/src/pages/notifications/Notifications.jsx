import React from 'react';
import { Bell, CheckCircle, Briefcase, Sparkles } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';

export const Notifications = () => {
  const list = [
    { id: '1', title: 'Application Update', msg: 'Nexus AI Tech moved your application to Under Review!', time: '2 hours ago', icon: Briefcase, color: '#818cf8' },
    { id: '2', title: 'New High-Match Job', msg: 'Lead Product UI/UX Designer matches your career preferences.', time: '1 day ago', icon: Sparkles, color: '#ec4899' },
    { id: '3', title: 'ATS Audit Ready', msg: 'Your latest resume upload scored 88/100.', time: '2 days ago', icon: CheckCircle, color: '#10b981' }
  ];

  return (
    <PageContainer title="System Notifications & Alerts">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '700px' }}>
        {list.map(n => {
          const Icon = n.icon;
          return (
            <div key={n.id} className="glass-card" style={{ padding: '16px 20px', display: 'flex', gap: '14px', alignItems: 'center' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={20} color={n.color} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>{n.title}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{n.time}</span>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.85rem', marginTop: '2px' }}>{n.msg}</p>
              </div>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
};

export default Notifications;
