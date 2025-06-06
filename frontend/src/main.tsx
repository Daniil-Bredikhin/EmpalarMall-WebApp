import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react';
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

const Main: React.FC = () => {
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Main />
  </StrictMode>,
)
