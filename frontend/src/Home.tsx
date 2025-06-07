import React from 'react';

const menuStyle: React.CSSProperties = {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  height: 60,
  background: '#fff',
  borderTop: '1px solid #eee',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  zIndex: 100,
};

const iconStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 22,
  color: '#1976d2',
  textDecoration: 'none',
  flex: 1,
};

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  color: '#1976d2',
  marginTop: 2,
};

const Home: React.FC<{ onMenuClick?: (menu: string) => void }> = ({ onMenuClick }) => (
  <div style={{ padding: 24, paddingBottom: 80 }}>
    <h1 style={{ color: '#1976d2', marginBottom: 16 }}>EMPALAR MALL</h1>
    <p style={{ fontSize: 18, marginBottom: 24 }}>
      Добро пожаловать в EMPALAR MALL — интернет-магазин с интеграцией Telegram WebApp!
    </p>
    <ul style={{ fontSize: 16, marginBottom: 24 }}>
      <li>• Современный каталог товаров</li>
      <li>• Личный кабинет с историей заказов</li>
      <li>• Админ-панель для управления магазином</li>
      <li>• Удобная интеграция с Telegram</li>
    </ul>
    <p style={{ color: '#888' }}>
      Для покупок используйте меню навигации сверху.
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
