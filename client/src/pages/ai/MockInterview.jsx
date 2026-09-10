import React, { useState } from 'react';
import { Bot, Send, Award } from 'lucide-react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';
import InterviewFeedbackComp from '../../components/ai/InterviewFeedback';

export const MockInterview = () => {
  const [started, setStarted] = useState(false);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(false);

  return (
    <PageContainer title="AI Live Mock Interview Simulator" subtitle="Interactive technical interview simulation with real-time scoring.">
      <div className="glass-card" style={{ padding: '28px', maxWidth: '750px' }}>
        {!started ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <Bot size={48} color="#818cf8" style={{ marginBottom: '16px' }} />
            <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '8px' }}>Ready for Senior Technical Screen?</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '24px' }}>The AI will ask 3 questions and evaluate your response using STAR method benchmarks.</p>
            <Button variant="gradient" size="lg" onClick={() => setStarted(true)}>Begin Interview Session</Button>
          </div>
        ) : (
          <div>
            <div style={{ padding: '16px', background: 'rgba(99,102,241,0.1)', borderRadius: '12px', border: '1px solid rgba(99,102,241,0.3)', marginBottom: '20px' }}>
              <h4 style={{ color: '#818cf8', fontWeight: 600, fontSize: '0.95rem' }}>Question 1 of 3 (System Architecture):</h4>
              <p style={{ color: '#fff', fontSize: '1rem', marginTop: '6px' }}>
                How do you handle memory overhead and index latency when performing vector similarity search across 10 million embeddings in Node.js?
              </p>
            </div>

            <textarea
              rows={4}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your response or STAR method explanation..."
              style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px', color: '#fff', outline: 'none', resize: 'none' }}
            />

            <Button variant="gradient" onClick={() => setFeedback(true)} style={{ marginTop: '16px', width: '100%' }}>
              Submit Answer for AI Evaluation
            </Button>

            {feedback && (
              <div style={{ marginTop: '24px' }}>
                <InterviewFeedbackComp />
              </div>
            )}
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default MockInterview;
