import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

export const Contact = () => {
  return (
    <PageContainer title="Contact GEZ Support" subtitle="Have questions? Reach out to our technical support team.">
      <div className="glass-card" style={{ padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Your Full Name" placeholder="Alex Rivera" />
          <Input label="Email Address" placeholder="alex@example.com" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Message</label>
            <textarea rows={4} placeholder="How can we help?" style={{ background: 'rgba(12,17,32,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '10px', color: '#fff', outline: 'none' }} />
          </div>
          <Button variant="gradient">Send Message</Button>
        </form>
      </div>
    </PageContainer>
  );
};

export default Contact;
