import React, { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Profile from './components/Profile'
import Cart from './pages/cart/Cart'
import Favorites from './pages/favorites/Favorites'
import Shorts from './pages/shorts/Shorts'
import './App.css'

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        expand: () => void;
        enableClosingConfirmation: () => void;
        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;
        ready: () => void;
      };
    };
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Инициализация и настройка Telegram Mini App
    WebApp.ready()
    
    // Установка светлой темы по умолчанию
    WebApp.setHeaderColor('#ffffff')
    WebApp.setBackgroundColor('#ffffff')
    
    // Принудительно включаем полноэкранный режим
    WebApp.enableClosingConfirmation()
    WebApp.expand()
    
    // Принудительно устанавливаем полноэкранный режим
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.expand()
      window.Telegram.WebApp.enableClosingConfirmation()
      window.Telegram.WebApp.setHeaderColor('#ffffff')
      window.Telegram.WebApp.setBackgroundColor('#ffffff')
    }
  }, [])

  const handleMenuClick = (menu: string) => {
    // Здесь можно добавить логику обработки кликов по меню
    console.log('Menu clicked:', menu)
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home onMenuClick={handleMenuClick} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/shorts" element={<Shorts />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
