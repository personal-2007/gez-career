import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const RecruiterRoute = () => {
  const { user } = useAuth();
  return user && (user.role === 'recruiter' || user.role === 'candidate') ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default RecruiterRoute;
