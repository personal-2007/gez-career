import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { NotificationProvider } from './context/NotificationContext';
import AppRoutes from './routes/AppRoutes';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import MobileNavbar from './components/layout/MobileNavbar';
import Footer from './components/layout/Footer';

const AppLayout = () => {
  const location = useLocation();
  const isPublicOrAuth = ['/', '/about', '/features', '/pricing', '/countries', '/companies', '/contact'].includes(location.pathname) ||
    location.pathname.startsWith('/auth') || location.pathname.startsWith('/onboarding');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)' }}>
      {!isPublicOrAuth && <Header />}
      
      <div style={{ display: 'flex', flex: 1 }}>
        {!isPublicOrAuth && <Sidebar />}
        <main style={{ flex: 1, minWidth: 0, paddingBottom: isPublicOrAuth ? 0 : '80px' }}>
          <AppRoutes />
        </main>
      </div>

      {!isPublicOrAuth && <MobileNavbar />}
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <UserProvider>
            <NotificationProvider>
              <AppLayout />
            </NotificationProvider>
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
