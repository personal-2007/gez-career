import { getItem } from '../utils/storage';

export const apiFetch = async (endpoint, options = {}) => {
  const token = getItem('token');
  const configuredApiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '');
  const apiBaseUrl = configuredApiUrl
    ? configuredApiUrl.endsWith('/api') ? configuredApiUrl : `${configuredApiUrl}/api`
    : '/api';
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers
  };

  let response;
  try {
    response = await fetch(`${apiBaseUrl}${endpoint}`, {
      ...options,
      headers
    });
  } catch (error) {
    throw new Error('Unable to connect to the server. Check that the API is running and try again.');
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || data.error || `API request failed (${response.status})`);
  }
  return data;
};
