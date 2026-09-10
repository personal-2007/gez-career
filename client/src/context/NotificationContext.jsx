import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Application Update', message: 'Nexus AI Tech reviewed your resume', read: false, time: '10m ago' },
    { id: '2', title: 'New Match', message: 'Senior Full Stack AI Role matches your profile 96%', read: true, time: '2h ago' }
  ]);

  const addNotification = (title, message) => {
    setNotifications(prev => [{ id: Date.now().toString(), title, message, read: false, time: 'Just now' }, ...prev]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
