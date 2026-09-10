import { apiFetch } from './api';

export const profileService = {
  getProfile: () => apiFetch('/profile'),
  updateProfile: (profileData) => apiFetch('/profile', { method: 'PUT', body: JSON.stringify(profileData) })
};
