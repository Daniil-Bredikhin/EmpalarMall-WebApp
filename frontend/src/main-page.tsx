import React, { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import Home from './Home';
import Profile from './Profile';
import AdminPanel from './AdminPanel';

export type Page = 'home' | 'profile' | 'admin';

interface NavigationProps {
  setPage: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setPage }) => (
  <nav style={{ marginBottom: 20 }}>
    <button onClick={() => setPage('home')}>Главная</button>{' '}
    <button onClick={() => setPage('profile')}>Личный кабинет</button>{' '}
    <button onClick={() => setPage('admin')}>Админ-панель</button>
  </nav>
);

const MainPage: React.FC = () => {
  useEffect(() => {
    // Используем WebApp для инициализации Telegram WebApp SDK
    if (WebApp && typeof WebApp.expand === 'function') {
      WebApp.expand();
    }
  }, []);

  const [page, setPage] = React.useState<Page>('home');

  return (
    <div>
      <Navigation setPage={setPage} />
      {page === 'home' && <Home />}
      {page === 'profile' && <Profile />}
      {page === 'admin' && <AdminPanel />}
    </div>
  );
};

export default MainPage;
