import React, { createContext, useState, useEffect } from 'react';
import { getItem, setItem, removeItem } from '../utils/storage';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getItem('user'));
  const [token, setToken] = useState(() => getItem('token'));

  const login = async (email, password) => {
    try {
      const res = await authService.login({ email, password });
      setUser(res.data.user);
      setToken(res.data.token);
      setItem('user', res.data.user);
      setItem('token', res.data.token);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    removeItem('user');
    removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
