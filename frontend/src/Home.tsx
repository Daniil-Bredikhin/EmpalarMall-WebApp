import React, { useEffect } from 'react';
// Импортируем шрифт Dubai через Google Fonts
import './assets/fonts.css';
import WebApp from '@twa-dev/sdk';

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

const menuStyle: React.CSSProperties = {
  position: 'fixed' as const,
  bottom: 16px,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  display: 'flex' as const,
  justifyContent: 'space-around' as const,
  padding: '12px 24px',
  borderRadius: '24px',
  boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
  backdropFilter: 'blur(12px)',
};

const iconStyle: React.CSSProperties = {
  display: 'flex' as const,
  flexDirection: 'column' as const,
  alignItems: 'center' as const,
  gap: '6px',
  padding: 0,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#111',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: '#646cff',
  },
};

const activeIconStyle: React.CSSProperties = {
  color: '#646cff',
};

const labelStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#111',
  fontFamily: 'Geraldton, Arial, sans-serif',
  fontWeight: 500,
};

const headerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 20px,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
  padding: '8px 16px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  maxWidth: '400px',
  margin: '0 auto',
  left: '50%',
  transform: 'translateX(-50%)',
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'Geraldton Medium, Arial, sans-serif',
  color: '#111',
  fontWeight: 500,
  fontSize: '20px',
  letterSpacing: '0.5px',
  margin: '0',
  padding: '0',
  textAlign: 'left',
  lineHeight: '1.2',
};

const searchBarStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '400px',
  position: 'relative',
  margin: '0 auto',
};

const searchInputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px 12px 40px',
  borderRadius: '16px',
  border: '1px solid #f0f0f0',
  fontSize: '15px',
  backgroundColor: '#f8f8f8',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  outline: 'none',
  transition: 'all 0.2s ease',
  fontFamily: 'Geraldton, Arial, sans-serif',
};

const searchIconStyle: React.CSSProperties = {
  position: 'absolute',
  left: '14px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#999',
};

// SVG-иконки (минимализм, черно-белые)
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const CatalogIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="2" ry="2"/>
    <rect x="14" y="3" width="7" height="7" rx="2" ry="2"/>
    <rect x="14" y="14" width="7" height="7" rx="2" ry="2"/>
    <rect x="3" y="14" width="7" height="7" rx="2" ry="2"/>
  </svg>
);

const FavoritesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const ProfileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

// Стили для историй
const storiesContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '16px',
  padding: '16px',
  overflowX: 'auto',
  marginTop: '60px',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
};

const storyStyle: React.CSSProperties = {
  width: '64px',
  height: '64px',
  borderRadius: '16px',
  backgroundColor: '#f8f8f8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
};

// Стили для товаров
const productsContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '12px',
  padding: '16px',
  marginTop: '8px',
};

const productCardStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',
};

const productImageStyle: React.CSSProperties = {
  width: '100%',
  aspectRatio: '1',
  borderRadius: '12px',
  backgroundColor: '#f8f8f8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

const productTitleStyle: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: 500,
  color: '#111',
  margin: 0,
  lineHeight: '1.4',
};

const productPriceStyle: React.CSSProperties = {
  fontSize: '15px',
  fontWeight: 600,
  color: '#111',
  margin: 0,
};

// Используем стили в компонентах
const Home: React.FC<{ onMenuClick?: (menu: string) => void }> = ({ onMenuClick }) => {
  useEffect(() => {
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
    <div style={{ padding: '0 0 88px 0', minHeight: '100vh', boxSizing: 'border-box', backgroundColor: '#fff' }}>
      {/* Фиксированный хедер */}
      <div style={headerStyle}>
        <div style={logoStyle}>EMPALAR MALL</div>
        <div style={searchBarStyle}>
          <div style={searchIconStyle}>
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Поиск товаров..."
            style={searchInputStyle}
            onFocus={(e) => {
              e.target.style.backgroundColor = '#fff';
              e.target.style.borderColor = '#646cff';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = '#f8f8f8';
              e.target.style.borderColor = '#f0f0f0';
              e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
            }}
          />
        </div>
      </div>

      {/* Истории */}
      <div style={storiesContainerStyle}>
        <div style={storyStyle}>
          <img src="/assets/story-placeholder.png" alt="Story" style={{ width: '48px', height: '48px' }} />
        </div>
      </div>

      {/* Секция товаров */}
      <div style={productsContainerStyle}>
        <div style={productCardStyle}>
          <div style={productImageStyle}>
            <img src="/assets/product-placeholder.png" alt="Product" />
          </div>
          <h3 style={productTitleStyle}>Название продукта</h3>
          <p style={productPriceStyle}>1000 ₽</p>
        </div>
      </div>

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
