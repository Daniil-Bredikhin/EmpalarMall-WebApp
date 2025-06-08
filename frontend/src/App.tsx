import React, { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Profile from './components/Profile'
import './App.css'

const App: React.FC = () => {
  useEffect(() => {
    // Инициализация и настройка Telegram Mini App
    // Устанавливаем тему и расширяем на весь экран
    WebApp.ready()
    
    // Установка светлой темы по умолчанию
    WebApp.setHeaderColor('#ffffff')
    WebApp.setBackgroundColor('#ffffff')
    
    // Расширяем на весь экран для лучшего UX
    WebApp.expand()
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
        </Routes>
      </div>
    </Router>
  )
}

export default App
