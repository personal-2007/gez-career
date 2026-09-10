import { apiFetch } from './api';

export const messageService = {
  getMessages: () => apiFetch('/messages'),
  sendMessage: (data) => apiFetch('/messages', { method: 'POST', body: JSON.stringify(data) })
};
