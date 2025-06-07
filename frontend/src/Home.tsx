import React, { useState, useEffect } from 'react';

// Стили
const menuStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '8px 24px 24px 24px',
  boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
  backdropFilter: 'blur(12px)',
  zIndex: 1000,
  transition: 'transform 0.3s ease',
};

const iconStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
  padding: 0,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#111',
  transition: 'all 0.2s ease',
  width: '100%',
  opacity: 0.7,
};

const activeIconStyle: React.CSSProperties = {
  ...iconStyle,
  color: '#000000',
  opacity: 1,
};

const labelStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#111',
  fontFamily: 'Geraldton, Arial, sans-serif',
  fontWeight: 500,
};

const headerStyle: React.CSSProperties = {
  position: 'fixed',
  top: '48px',
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
  padding: '16px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  width: 'calc(100% - 32px)',
  maxWidth: '360px',
  margin: '0 auto',
  left: '50%',
  transform: 'translateX(-50%)',
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'Montserrat, Arial, sans-serif',
  color: '#111',
  fontWeight: 700,
  fontSize: '20px',
  letterSpacing: '1.2px',
  margin: '0',
  padding: '0',
  textAlign: 'center',
  lineHeight: '1.2',
  width: '100%',
  paddingLeft: '44px',
  paddingRight: '24px',
};

const searchBarStyle: React.CSSProperties = {
  width: '100%',
  position: 'relative',
  margin: '0 auto',
  boxSizing: 'border-box',
};

const searchInputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 20px 14px 48px',
  borderRadius: '24px',
  border: '1px solid #e0e0e0',
  fontSize: '16px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  outline: 'none',
  transition: 'all 0.2s ease',
  fontFamily: 'Geraldton, Arial, sans-serif',
  boxSizing: 'border-box',
};

const searchIconStyle: React.CSSProperties = {
  position: 'absolute',
  left: '14px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#999',
};

const contentStyle: React.CSSProperties = {
  padding: '180px 16px 80px',
  maxWidth: '360px',
  margin: '0 auto',
  width: '100%',
  boxSizing: 'border-box',
};

// Обновляем интерфейс MenuIconProps
interface MenuIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  style: React.CSSProperties;
}

// Обновляем компонент MenuIcon
const MenuIcon: React.FC<MenuIconProps> = ({ icon, label, onClick, style }) => {
  return (
    <button
      style={style}
      onClick={onClick}
    >
      {icon}
      <span style={labelStyle}>{label}</span>
    </button>
  );
};

// SVG-иконки
const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const CatalogIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="2" ry="2"/>
    <rect x="14" y="3" width="7" height="7" rx="2" ry="2"/>
    <rect x="14" y="14" width="7" height="7" rx="2" ry="2"/>
    <rect x="3" y="14" width="7" height="7" rx="2" ry="2"/>
  </svg>
);

const ShortsIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M2 12h20M12 2l10 10M12 2L2 12M12 22l10-10M12 22L2 12"/>
  </svg>
);

const CartIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
  </svg>
);

const ProfileIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

// Временные компоненты для страниц
const CatalogPage = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h2>Каталог</h2>
    <p>Страница в разработке</p>
  </div>
);

const ShortsPage = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h2>Шортсы</h2>
    <p>Страница в разработке</p>
  </div>
);

const CartPage = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h2>Корзина</h2>
    <p>Страница в разработке</p>
  </div>
);

const ProfilePage = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h2>Профиль</h2>
    <p>Страница в разработке</p>
  </div>
);

// Интерфейс для пропсов Home
interface HomeProps {
  onMenuClick: (menu: string) => void;
}

// Компонент Home
const Home: React.FC<HomeProps> = ({ onMenuClick }) => {
  const [searchValue, setSearchValue] = useState('');
  const [activeMenu, setActiveMenu] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    // Запрещаем масштабирование
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    setCurrentPage(menu);
    onMenuClick(menu);
  };

  const handleSearchFocus = () => {
    setIsKeyboardVisible(true);
  };

  const handleSearchBlur = () => {
    setIsKeyboardVisible(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'catalog':
        return <CatalogPage />;
      case 'shorts':
        return <ShortsPage />;
      case 'cart':
        return <CartPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return null;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f8f8' }}>
      {/* Шапка */}
      <header style={headerStyle}>
        <h1 style={logoStyle}>EMPALAR MALL</h1>
        <div style={searchBarStyle}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            placeholder="Поиск..."
            style={searchInputStyle}
          />
          <div style={searchIconStyle}>
            <SearchIcon />
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main style={contentStyle}>
        {renderPage()}
      </main>

      {/* Мобильное меню */}
      {!isKeyboardVisible && (
        <nav style={menuStyle}>
          <MenuIcon
            icon={<HomeIcon />}
            label="Главная"
            onClick={() => handleMenuClick('home')}
            style={activeMenu === 'home' ? activeIconStyle : iconStyle}
          />
          <MenuIcon
            icon={<CatalogIcon />}
            label="Каталог"
            onClick={() => handleMenuClick('catalog')}
            style={activeMenu === 'catalog' ? activeIconStyle : iconStyle}
          />
          <MenuIcon
            icon={<ShortsIcon />}
            label="Шортсы"
            onClick={() => handleMenuClick('shorts')}
            style={activeMenu === 'shorts' ? activeIconStyle : iconStyle}
          />
          <MenuIcon
            icon={<CartIcon />}
            label="Корзина"
            onClick={() => handleMenuClick('cart')}
            style={activeMenu === 'cart' ? activeIconStyle : iconStyle}
          />
          <MenuIcon
            icon={<ProfileIcon />}
            label="Профиль"
            onClick={() => handleMenuClick('profile')}
            style={activeMenu === 'profile' ? activeIconStyle : iconStyle}
          />
        </nav>
      )}
    </div>
  );
};

export default Home;
