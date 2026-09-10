import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Rivera',
    title: 'Senior Full Stack & AI Specialist',
    location: 'San Francisco, CA',
    readinessScore: 94
  });

  return (
    <UserContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};
