import { apiFetch } from './api';

export const jobService = {
  getJobs: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiFetch(`/jobs${query ? `?${query}` : ''}`);
  },
  getJobById: (id) => apiFetch(`/jobs/${id}`),
  createJob: (jobData) => apiFetch('/jobs', { method: 'POST', body: JSON.stringify(jobData) })
};
