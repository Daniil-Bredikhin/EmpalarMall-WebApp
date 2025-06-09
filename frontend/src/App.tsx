import React, { useEffect } from 'react'
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
}

const App: React.FC = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.enableClosingConfirmation();
    tg.setHeaderColor('#ffffff');
    tg.setBackgroundColor('#f8f8f8');
  }, []);

  const handleMenuClick = (menu: string) => {
    // Здесь можно добавить логику обработки кликов по меню
    console.log('Menu clicked:', menu)
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
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
