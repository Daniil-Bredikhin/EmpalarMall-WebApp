import React, { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import Home from './pages/home/Home'
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
    <div className="app">
      <Home onMenuClick={handleMenuClick} />
    </div>
  )
}

export default App
