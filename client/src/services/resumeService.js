import { apiFetch } from './api';

export const resumeService = {
  getResumes: () => apiFetch('/resumes'),
  analyzeResume: (data) => apiFetch('/resumes/analyze', { method: 'POST', body: JSON.stringify(data) })
};
