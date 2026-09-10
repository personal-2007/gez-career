import { apiFetch } from './api';

export const applicationService = {
  getMyApplications: () => apiFetch('/applications'),
  applyForJob: (appData) => apiFetch('/applications/apply', { method: 'POST', body: JSON.stringify(appData) })
};
