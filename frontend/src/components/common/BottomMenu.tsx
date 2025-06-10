import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, ShortsIcon, ProfileIcon } from '../icons/MenuIcons';

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
    width: '64px',
  };

  const shortsButtonStyle: React.CSSProperties = {
    ...bottomButtonStyle,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '64px',
    marginTop: '-20px',
    backgroundColor: '#000000',
    borderRadius: '50%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  };

  const iconStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={bottomMenuStyle}>
      <button style={bottomButtonStyle} onClick={() => navigate('/')}>
        <div style={iconStyle}>
          <HomeIcon color="#000000" />
        </div>
        <span style={{ fontSize: '13px', color: '#000000' }}>Главная</span>
      </button>
      <button style={bottomButtonStyle} onClick={() => navigate('/search')}>
        <div style={iconStyle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </div>
        <span style={{ fontSize: '13px', color: '#000000' }}>Каталог</span>
      </button>
      <button style={shortsButtonStyle} onClick={() => navigate('/shorts')}>
        <ShortsIcon color="#ffffff" />
      </button>
      <button style={bottomButtonStyle} onClick={() => navigate('/cart')}>
        <div style={iconStyle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </div>
        <span style={{ fontSize: '13px', color: '#000000' }}>Корзина</span>
      </button>
      <button style={bottomButtonStyle} onClick={() => navigate('/profile')}>
        <div style={iconStyle}>
          <ProfileIcon color="#000000" />
        </div>
        <span style={{ fontSize: '13px', color: '#000000' }}>Профиль</span>
      </button>
    </div>
  );
};

export default BottomMenu; 