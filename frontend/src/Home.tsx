import React, { useState } from 'react';

// Стили
const menuStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '16px',
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '12px 24px',
  borderRadius: '24px',
  boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
  backdropFilter: 'blur(12px)',
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
};

const labelStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#111',
  fontFamily: 'Geraldton, Arial, sans-serif',
  fontWeight: 500,
};

const headerStyle: React.CSSProperties = {
  position: 'fixed',
  top: '20px',
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

// Интерфейс для пропсов Home
interface HomeProps {
  onMenuClick: (menu: string) => void;
}

// Компонент Home
const Home: React.FC<HomeProps> = ({ onMenuClick }) => {
  const [searchValue, setSearchValue] = useState('');
  const [activeMenu, setActiveMenu] = useState('home');

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    onMenuClick(menu);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f8f8' }}>
      {/* Шапка */}
      <header style={headerStyle}>
        <h1 style={logoStyle}>EmpalarMall</h1>
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
      </header>

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
          icon={<FavoritesIcon />}
          label="Избранное"
          isActive={activeMenu === 'favorites'}
          onClick={() => handleMenuClick('favorites')}
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

      {/* Основной контент */}
      <main style={{ padding: '20px', marginTop: '120px', marginBottom: '80px' }}>
        {/* Сюда добавляется контент страницы */}
      </main>
    </div>
  );
};

export default Home;
