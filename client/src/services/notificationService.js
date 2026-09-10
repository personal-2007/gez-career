import { apiFetch } from './api';

export const notificationService = {
  getNotifications: () => apiFetch('/notifications')
};
