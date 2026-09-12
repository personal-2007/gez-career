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
  const isPublicOrAuth = ['/', '/splash', '/landing', '/about', '/features', '/pricing', '/countries', '/companies', '/contact'].includes(location.pathname) ||
    location.pathname.startsWith('/auth') || location.pathname.startsWith('/onboarding');

  return (
    <div className="app-shell" style={{ background: isPublicOrAuth ? '#f8fafc' : '#f8fafc' }}>
      {!isPublicOrAuth && <Header />}

      <div style={{ display: 'flex', flex: 1, width: '100%' }}>
        {!isPublicOrAuth && <Sidebar />}
        <main style={{
          flex: 1,
          minWidth: 0,
          width: '100%',
          maxWidth: isPublicOrAuth ? 'none' : '1440px',
          margin: isPublicOrAuth ? '0' : '0 auto',
          paddingBottom: isPublicOrAuth ? 0 : '88px'
        }}>
          <AppRoutes />
        </main>
      </div>

      {!isPublicOrAuth && <MobileNavbar />}
      {!isPublicOrAuth && <Footer />}
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
