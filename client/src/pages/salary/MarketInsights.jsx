import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import { TrendingUp } from 'lucide-react';

export const MarketInsights = () => {
  return (
    <PageContainer title="2026 Tech Compensation Trends">
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <TrendingUp size={18} /> Full Stack AI Roles increased 42% YoY in demand
        </h4>
      </div>
    </PageContainer>
  );
};

export default MarketInsights;
