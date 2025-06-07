import React, { useState } from 'react';

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
};

const labelStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#111',
  fontFamily: 'Geraldton, Arial, sans-serif',
  fontWeight: 500,
};

const headerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
  padding: '16px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  left: '50%',
  transform: 'translateX(-50%)',
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'Geraldton Medium, Arial, sans-serif',
  color: '#111',
  fontWeight: 500,
  fontSize: '24px',
  letterSpacing: '0.5px',
  margin: '0',
  padding: '0',
  textAlign: 'center',
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

const contentStyle: React.CSSProperties = {
  padding: '20px',
  marginTop: '140px',
  marginBottom: '100px',
  minHeight: 'calc(100vh - 240px)',
};

// Интерфейс для MenuIcon
interface MenuIconProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// Компонент MenuIcon
const MenuIcon: React.FC<MenuIconProps> = ({ icon, label, isActive, onClick }) => {
  const handleHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.color = '#646cff';
  };

  const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.color = isActive ? '#646cff' : '#111';
  };

  return (
    <button
      style={iconStyle}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {icon}
      <span style={labelStyle}>{label}</span>
    </button>
  );
};

// SVG-иконки
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

const ShortsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
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

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    setCurrentPage(menu);
    onMenuClick(menu);
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
        <div style={searchBarStyle}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Поиск..."
            style={searchInputStyle}
          />
          <div style={searchIconStyle}>
            <SearchIcon />
          </div>
        </div>
        <h1 style={logoStyle}>EMPALAR MALL</h1>
      </header>

      {/* Основной контент */}
      <main style={contentStyle}>
        {renderPage()}
      </main>

      {/* Мобильное меню */}
      <nav style={menuStyle}>
        <MenuIcon
          icon={<HomeIcon />}
          label="Главная"
          isActive={activeMenu === 'home'}
          onClick={() => handleMenuClick('home')}
        />
        <MenuIcon
          icon={<CatalogIcon />}
          label="Каталог"
          isActive={activeMenu === 'catalog'}
          onClick={() => handleMenuClick('catalog')}
        />
        <MenuIcon
          icon={<ShortsIcon />}
          label="Шортсы"
          isActive={activeMenu === 'shorts'}
          onClick={() => handleMenuClick('shorts')}
        />
        <MenuIcon
          icon={<CartIcon />}
          label="Корзина"
          isActive={activeMenu === 'cart'}
          onClick={() => handleMenuClick('cart')}
        />
        <MenuIcon
          icon={<ProfileIcon />}
          label="Профиль"
          isActive={activeMenu === 'profile'}
          onClick={() => handleMenuClick('profile')}
        />
      </nav>
    </div>
  );
};

export default Home;
