import { apiFetch } from './api';

export const aiService = {
  chat: (message, history) => apiFetch('/ai/chat', { method: 'POST', body: JSON.stringify({ message, history }) }),
  getInterviewFeedback: (question, answer) => apiFetch('/ai/interview-feedback', { method: 'POST', body: JSON.stringify({ question, answer }) }),
  getSkillGap: (targetRole) => apiFetch('/ai/skill-gap', { method: 'POST', body: JSON.stringify({ targetRole }) })
};
