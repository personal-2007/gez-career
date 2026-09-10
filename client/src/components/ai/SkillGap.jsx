import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import Badge from '../common/Badge';

export const SkillGap = ({ targetRole = 'Senior AI Engineer' }) => {
  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
        <Target size={22} color="#818cf8" />
        <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', fontWeight: 700 }}>90-Day Skill Accelerator: {targetRole}</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
          <h4 style={{ color: '#818cf8', fontSize: '0.9rem' }}>Weeks 1-2: Vector Embeddings</h4>
          <p style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>Master Pinecone, Weaviate, and RAG architectures.</p>
        </div>
        <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
          <h4 style={{ color: '#818cf8', fontSize: '0.9rem' }}>Weeks 3-4: Agent Frameworks</h4>
          <p style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>Build multi-agent task execution flows with LangChain and AutoGen.</p>
        </div>
      </div>
    </div>
  );
};

export default SkillGap;
