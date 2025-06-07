import React from 'react';
// Импортируем шрифт Dubai через Google Fonts
import './assets/fonts.css';
import WebApp from '@twa-dev/sdk';

const menuStyle: React.CSSProperties = {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 16, // меню чуть ниже
  height: 76, // меню выше
  background: '#fff',
  borderTop: '1px solid #eee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 100,
  padding: '0 0', // убираем боковые отступы
  width: '100vw', // фон до краёв экрана
  boxSizing: 'border-box',
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
  filter: 'none', // убираем grayscale, SVG сами черно-белые
  minWidth: 0,
  padding: 0,
};

const labelStyle: React.CSSProperties = {
  fontSize: 10,
  color: '#111',
  marginTop: 2,
  fontFamily: 'Geraldton, Arial, sans-serif',
  fontWeight: 500,
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'Geraldton, Arial, sans-serif',
  color: '#111',
  fontWeight: 700,
  fontSize: 20, // немного увеличен
  letterSpacing: 1,
  textAlign: 'center',
  margin: '32px 0 20px 80px', // поднят выше и смещён правее
  padding: '0',
  width: 'fit-content',
  display: 'block',
};

const searchBarStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: 400,
  margin: '16px auto',
  position: 'relative',
};

const searchInputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  paddingLeft: '40px',
  borderRadius: '8px',
  border: '1px solid #eee',
  fontSize: '16px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'Geraldton, Arial, sans-serif',
};

const searchIconStyle: React.CSSProperties = {
  position: 'absolute',
  left: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#666',
};

// SVG-иконки (минимализм, черно-белые)
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11L12 4l9 7"/><path d="M9 22V12h6v10"/></svg>
);
const CatalogIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="7" height="7" rx="2"/><rect x="14" y="4" width="7" height="7" rx="2"/><rect x="14" y="13" width="7" height="7" rx="2"/><rect x="3" y="13" width="7" height="7" rx="2"/></svg>
);
const FavoritesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/></svg>
);
const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
);
const ProfileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/></svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const Home: React.FC<{ onMenuClick?: (menu: string) => void }> = ({ onMenuClick }) => {
  React.useEffect(() => {
    // Telegram WebApp UX: расширяем окно, настраиваем цвет фона
    if (WebApp && typeof WebApp.expand === 'function') {
      WebApp.expand();
    }
    if (WebApp && WebApp.themeParams) {
      // Устанавливаем светлый фон по умолчанию
      document.body.style.background = WebApp.themeParams.bg_color || '#ffffff';
      // Если темная тема, устанавливаем соответствующие цвета
      if (WebApp.themeParams.bg_color === '#000000') {
        document.body.style.background = '#ffffff';
        document.body.style.color = '#000000';
      }
    }
    // Удаляем MainButton (добавить в корзину)
    if (WebApp && WebApp.MainButton) {
      WebApp.MainButton.hide();
    }
    // Убираем прокрутку
    document.body.style.overflow = 'hidden';
    return () => {
      if (WebApp && WebApp.MainButton) {
        WebApp.MainButton.hide();
      }
      document.body.style.overflow = '';
    };
  }, [onMenuClick]);

  return (
    <div style={{ padding: '0 0 110px 0', minHeight: '100vh', boxSizing: 'border-box', overflow: 'hidden' }}>
      {/* Поисковая строка */}
      <div style={searchBarStyle}>
        <div style={searchIconStyle}>
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Найти товар..."
          style={searchInputStyle}
          onFocus={(e) => e.target.style.borderColor = '#646cff'}
          onBlur={(e) => e.target.style.borderColor = '#eee'}
        />
      </div>
      {/* Логотип в самом верху */}
      <div style={{ display: 'block', width: '100%' }}>
        <div style={logoStyle}>EMPALAR MALL</div>
      </div>
      {/* Поиск поднят выше */}
      <div style={{ margin: '0 auto 16px auto', maxWidth: 400, position: 'relative', top: -12 }}>
        {/* Здесь должен быть компонент поиска, если он есть */}
      </div>
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
          <HomeIcon />
          <span style={labelStyle}>Главная</span>
        </button>
        <button style={iconStyle} onClick={() => onMenuClick?.('catalog')}>
          <CatalogIcon />
          <span style={labelStyle}>Каталог</span>
        </button>
        <button style={iconStyle} onClick={() => onMenuClick?.('favorites')}>
          <FavoritesIcon />
          <span style={labelStyle}>Избранное</span>
        </button>
        <button style={iconStyle} onClick={() => onMenuClick?.('cart')}>
          <CartIcon />
          <span style={labelStyle}>Корзина</span>
        </button>
        <button style={iconStyle} onClick={() => onMenuClick?.('profile')}>
          <ProfileIcon />
          <span style={labelStyle}>Профиль</span>
        </button>
      </nav>
    </div>
  );
};

export default Home;
