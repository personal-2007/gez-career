import React from 'react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import Badge from '../../components/common/Badge';

export const LearningHome = () => {
  const courses = [
    { title: 'Vector Embeddings & RAG Production Systems', author: 'Dr. Andrew Ng', duration: '6 Hours', rating: 4.9 },
    { title: 'Advanced React 18 Concurrent Features & Micro-frontends', author: 'Dan Abramov', duration: '8 Hours', rating: 4.8 },
    { title: 'Rust Distributed Systems Architecture', author: 'Steve Klabnik', duration: '12 Hours', rating: 4.9 }
  ];

  return (
    <PageContainer title="Learning & Skill Verification Center" subtitle="Master high-demand tech skills and earn verified certificates for recruiters.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {courses.map((course, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '24px' }}>
            <BookOpen size={28} color="#818cf8" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700, marginBottom: '6px' }}>{course.title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '14px' }}>{course.author} • {course.duration}</p>
            <Badge variant="success">Verified Certificate Included</Badge>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default LearningHome;
