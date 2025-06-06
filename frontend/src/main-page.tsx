import React, { useEffect } from 'react';
import { init } from '@twa-dev/sdk';
import Home from './Home';
import Profile from './Profile';
import AdminPanel from './AdminPanel';

export type Page = 'home' | 'profile' | 'admin';

interface NavigationProps {
  page: Page;
  setPage: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ page, setPage }) => (
  <nav style={{ marginBottom: 20 }}>
    <button onClick={() => setPage('home')}>Главная</button>{' '}
    <button onClick={() => setPage('profile')}>Личный кабинет</button>{' '}
    <button onClick={() => setPage('admin')}>Админ-панель</button>
  </nav>
);

const MainPage: React.FC = () => {
  useEffect(() => {
    init(); // Инициализация Telegram WebApp SDK
  }, []);

  const [page, setPage] = React.useState<Page>('home');

  return (
    <div>
      <Navigation page={page} setPage={setPage} />
      {page === 'home' && <Home />}
      {page === 'profile' && <Profile />}
      {page === 'admin' && <AdminPanel />}
    </div>
  );
};

export default MainPage;
