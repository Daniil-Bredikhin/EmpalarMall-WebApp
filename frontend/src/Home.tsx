import React from 'react';
// Импортируем шрифт Dubai через Google Fonts
import './assets/fonts.css';

const menuStyle: React.CSSProperties = {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 24, // поднято выше
  height: 64,
  background: '#fff',
  borderTop: '1px solid #eee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 100,
  padding: '0 2px',
};

const iconStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 20,
  color: '#111',
  textDecoration: 'none',
  flex: 1,
  background: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  filter: 'grayscale(1)', // черно-белые иконки
  minWidth: 0,
  padding: 0,
};

const labelStyle: React.CSSProperties = {
  fontSize: 10,
  color: '#111',
  marginTop: 2,
  fontFamily: 'Dubai, Arial, sans-serif',
  fontWeight: 500,
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'Geraldton, Arial, sans-serif',
  color: '#111',
  fontWeight: 700,
  fontSize: 22, // уменьшен размер
  letterSpacing: 1,
  textAlign: 'center',
  margin: '0 0 24px 0',
  padding: '24px 0 0 0',
  width: '100%',
};

const Home: React.FC<{ onMenuClick?: (menu: string) => void }> = ({ onMenuClick }) => (
  <div style={{ padding: '0 0 96px 0', minHeight: '100vh', boxSizing: 'border-box' }}>
    {/* Логотип в самом верху */}
    <div style={logoStyle}>EMPALAR MALL</div>
    <p style={{ fontSize: 18, marginBottom: 24, textAlign: 'center' }}>
      Добро пожаловать в EMPALAR MALL — интернет-магазин с интеграцией Telegram WebApp!
    </p>
    <ul style={{ fontSize: 16, marginBottom: 24, textAlign: 'center', padding: 0, listStyle: 'none' }}>
      <li>• Современный каталог товаров</li>
      <li>• Личный кабинет с историей заказов</li>
      <li>• Админ-панель для управления магазином</li>
      <li>• Удобная интеграция с Telegram</li>
    </ul>
    <p style={{ color: '#888', textAlign: 'center' }}>
      Для покупок используйте меню навигации снизу.
    </p>
    {/* Мобильное меню */}
    <nav style={menuStyle}>
      <button style={iconStyle} onClick={() => onMenuClick?.('home')}>
        <span role="img" aria-label="Главная">🏠</span>
        <span style={labelStyle}>Главная</span>
      </button>
      <button style={iconStyle} onClick={() => onMenuClick?.('catalog')}>
        <span role="img" aria-label="Каталог">🛍️</span>
        <span style={labelStyle}>Каталог</span>
      </button>
      <button style={iconStyle} onClick={() => onMenuClick?.('favorites')}>
        <span role="img" aria-label="Избранное">⭐</span>
        <span style={labelStyle}>Избранное</span>
      </button>
      <button style={iconStyle} onClick={() => onMenuClick?.('cart')}>
        <span role="img" aria-label="Корзина">🛒</span>
        <span style={labelStyle}>Корзина</span>
      </button>
      <button style={iconStyle} onClick={() => onMenuClick?.('profile')}>
        <span role="img" aria-label="Профиль">👤</span>
        <span style={labelStyle}>Профиль</span>
      </button>
    </nav>
  </div>
);

export default Home;
