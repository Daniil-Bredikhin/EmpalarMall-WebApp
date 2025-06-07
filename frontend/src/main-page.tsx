import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import Home from './Home';
import Profile from './components/Profile';
import AdminPanel from './AdminPanel';

export type Page = 'home' | 'profile' | 'admin';

const MainPage: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    // Используем WebApp для инициализации Telegram WebApp SDK
    if (WebApp && typeof WebApp.expand === 'function') {
      WebApp.expand();
    }
  }, []);

  // Обработка нажатий на мобильное меню
  const handleMenuClick = (menu: string) => {
    switch (menu) {
      case 'home':
        setPage('home');
        break;
      case 'profile':
        setPage('profile');
        break;
      case 'admin':
        setPage('admin');
        break;
      // Каталог, Избранное, Корзина — пока не реализованы, можно добавить позже
      default:
        setPage('home');
    }
  };

  return (
    <div>
      {page === 'home' && <Home onMenuClick={handleMenuClick} />}
      {page === 'profile' && <Profile />}
      {page === 'admin' && <AdminPanel />}
    </div>
  );
};

export default MainPage;
