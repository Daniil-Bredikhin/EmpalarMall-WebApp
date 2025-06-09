import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, SearchIcon, ShortsIcon, CartIcon, ProfileIcon } from '../icons/MenuIcons';

const BottomMenu: React.FC = () => {
  const navigate = useNavigate();

  const bottomMenuStyle: React.CSSProperties = {
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

  const bottomButtonStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    background: 'none',
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
    color: '#000000',
    fontSize: '13px',
    fontWeight: 500,
  };

  const shortsButtonStyle: React.CSSProperties = {
    ...bottomButtonStyle,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
  };

  return (
    <div style={bottomMenuStyle}>
      <button style={bottomButtonStyle} onClick={() => navigate('/')}>
        <HomeIcon color="#000000" />
        <span style={{ fontSize: '13px', color: '#000000' }}>Главная</span>
      </button>
      <button style={bottomButtonStyle} onClick={() => navigate('/search')}>
        <SearchIcon color="#000000" />
        <span style={{ fontSize: '13px', color: '#000000' }}>Поиск</span>
      </button>
      <button style={shortsButtonStyle} onClick={() => navigate('/shorts')}>
        <ShortsIcon color="#000000" />
      </button>
      <button style={bottomButtonStyle} onClick={() => navigate('/cart')}>
        <CartIcon color="#000000" />
        <span style={{ fontSize: '13px', color: '#000000' }}>Корзина</span>
      </button>
      <button style={bottomButtonStyle} onClick={() => navigate('/profile')}>
        <ProfileIcon color="#000000" />
        <span style={{ fontSize: '13px', color: '#000000' }}>Профиль</span>
      </button>
    </div>
  );
};

export default BottomMenu; 