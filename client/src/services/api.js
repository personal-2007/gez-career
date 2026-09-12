import { getItem } from '../utils/storage';

export const apiFetch = async (endpoint, options = {}) => {
  const token = getItem('token');
  const apiBaseUrl = import.meta.env.VITE_API_URL || '/api';
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
    throw new Error(data.message || 'API request failed');
  }
  return data;
};
