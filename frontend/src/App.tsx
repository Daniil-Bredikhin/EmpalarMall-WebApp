import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WebApp from '@twa-dev/sdk'
import Home from './pages/home/Home'
import Profile from './components/Profile'
import Cart from './pages/cart/Cart'
import Shorts from './pages/shorts/Shorts'
import Search from './pages/search/Search'
import Admin from './pages/admin/Admin'
import './App.css'

declare global {
  interface Window {
    Telegram: {
      WebApp: WebApp;
    };
  }
}

interface WebApp {
  ready(): void;
  expand(): void;
  close(): void;
  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText(text: string): void;
    onClick(callback: () => void): void;
    offClick(callback: () => void): void;
    show(): void;
    hide(): void;
    enable(): void;
    disable(): void;
    showProgress(leaveActive: boolean): void;
    hideProgress(): void;
  };
  BackButton: {
    isVisible: boolean;
    onClick(callback: () => void): void;
    offClick(callback: () => void): void;
    show(): void;
    hide(): void;
  };
  enableClosingConfirmation(): void;
  setHeaderColor(color: string): void;
  setBackgroundColor(color: string): void;
  isExpanded: boolean;
}

const App: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.enableClosingConfirmation();
    tg.setHeaderColor('#ffffff');
    tg.setBackgroundColor('#f8f8f8');

    // Проверка Fullscreen
    setTimeout(() => {
      if (!tg.isExpanded) {
        tg.expand();
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    }, 500);
  }, []);

  if (!isExpanded) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
        padding: 32
      }}>
        <p>Пожалуйста, откройте приложение в Telegram в режиме Fullscreen (полноэкранный режим).</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
