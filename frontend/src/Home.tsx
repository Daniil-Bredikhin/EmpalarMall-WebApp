import React from 'react';
// Импортируем шрифт Dubai через Google Fonts
import './assets/fonts.css';
import WebApp from '@twa-dev/sdk';

const menuStyle: React.CSSProperties = {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  height: '72px',
  background: 'rgba(255, 255, 255, 0.98)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid #f0f0f0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 100,
  padding: '0 16px',
  width: '100%',
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
  fontSize: '18px',
  letterSpacing: '0.5px',
  margin: 0,
  padding: 0,
};

const searchBarStyle: React.CSSProperties = {
  flex: 1,
  position: 'relative',
  maxWidth: 'none',
  margin: 0,
};

const searchInputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 16px 10px 36px',
  borderRadius: '12px',
  border: '1px solid #f0f0f0',
  fontSize: '15px',
  backgroundColor: '#f8f8f8',
  boxShadow: 'none',
  outline: 'none',
  transition: 'all 0.2s ease',
  fontFamily: 'Geraldton, Arial, sans-serif',
};

const searchIconStyle: React.CSSProperties = {
  position: 'absolute',
  left: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#999',
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

const headerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
  padding: '12px 16px',
  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

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
    <div style={{ padding: '0 0 88px 0', minHeight: '100vh', boxSizing: 'border-box', backgroundColor: '#fff' }}>
      {/* Фиксированный хедер */}
      <div style={headerStyle}>
        <div style={logoStyle}>EMPALAR</div>
        <div style={searchBarStyle}>
          <div style={searchIconStyle}>
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Поиск..."
            style={searchInputStyle}
            onFocus={(e) => {
              e.target.style.backgroundColor = '#fff';
              e.target.style.borderColor = '#646cff';
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = '#f8f8f8';
              e.target.style.borderColor = '#f0f0f0';
            }}
          />
        </div>
      </div>

      {/* Сторисы */}
      <div style={storiesContainerStyle}>
        {[
          { emoji: '🔥', label: 'Новинки' },
          { emoji: '⭐', label: 'Популярное' },
          { emoji: '🎁', label: 'Акции' },
          { emoji: '📱', label: 'Техника' },
          { emoji: '👕', label: 'Одежда' },
        ].map((story, index) => (
          <div key={index} style={storyStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '24px' }}>{story.emoji}</span>
              <span style={{ fontSize: '10px', color: '#666' }}>{story.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Тестовые товары */}
      <div style={productsContainerStyle}>
        {[
          { title: 'iPhone 14 Pro', price: '89 999 ₽', image: '📱' },
          { title: 'MacBook Air M2', price: '129 999 ₽', image: '💻' },
          { title: 'AirPods Pro', price: '24 999 ₽', image: '🎧' },
          { title: 'Apple Watch', price: '32 999 ₽', image: '⌚' },
        ].map((product, index) => (
          <div key={index} style={productCardStyle}>
            <div style={productImageStyle}>
              <span style={{ fontSize: '32px' }}>{product.image}</span>
            </div>
            <h3 style={productTitleStyle}>{product.title}</h3>
            <p style={productPriceStyle}>{product.price}</p>
          </div>
        ))}
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
