import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/antd.css';

// Инициализация Telegram WebApp
import WebApp from '@twa-dev/sdk'

// Инициализируем WebApp
WebApp.ready();

// Создаем корневой элемент
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Рендерим приложение
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
