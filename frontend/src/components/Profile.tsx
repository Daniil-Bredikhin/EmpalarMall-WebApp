import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';

interface User {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
}

interface IconProps {
  style?: React.CSSProperties;
}

const FavoriteIcon: React.FC<IconProps> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const DeliveryIcon: React.FC<IconProps> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const PurchaseIcon: React.FC<IconProps> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const SupportIcon: React.FC<IconProps> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const PointsIcon: React.FC<IconProps> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);

const FavoriteBrandsIcon: React.FC<IconProps> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);

const ViewedIcon: React.FC<IconProps> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const ReviewsIcon: React.FC<IconProps> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Инициализация данных пользователя
    const userData = WebApp.initDataUnsafe.user;
    if (userData) {
      setUser(userData as User);
    }

    // Установка светлой темы
    WebApp.setHeaderColor('#ffffff');
    WebApp.setBackgroundColor('#f8f8f8');

    WebApp.BackButton.show();
    WebApp.BackButton.onClick(handleBack);
    return () => {
      WebApp.BackButton.hide();
      WebApp.BackButton.offClick(handleBack);
    };
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#f8f8f8',
    paddingBottom: '80px',
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
    paddingLeft: '25px',
    paddingRight: '24px',
  };

  const profileSectionStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '24px 16px',
    marginTop: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '8px',
  };

  const avatarContainerStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid #f0f0f0',
  };

  const avatarStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const userInfoStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  const nameStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 600,
    color: '#000',
    marginBottom: '4px',
  };

  const usernameStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#666',
  };

  const actionsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
    padding: '16px',
    backgroundColor: '#fff',
    margin: '0 16px 8px 16px',
    borderRadius: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const actionButtonStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  const iconWrapperStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8px',
  };

  const actionIconStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    color: '#000',
  };

  const buttonTextStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#000',
    textAlign: 'center',
    marginTop: '4px',
  };

  const infoGridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '8px',
    padding: '8px',
    margin: '0 16px 8px 16px',
    borderRadius: '16px',
  };

  const infoButtonStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 20px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '100%',
    boxSizing: 'border-box',
    margin: 0,
  };

  const smallIconStyle: React.CSSProperties = {
    width: '18px',
    height: '18px',
    marginRight: '10px',
    color: '#333',
    flexShrink: 0,
  };

  const infoTextStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#333',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const bottomButtonStyle: React.CSSProperties = {
    width: 'calc(100% - 32px)',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '16px',
    padding: '16px',
    margin: '0 16px 8px 16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const iconWithTextStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const actionLabelStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#000',
    fontFamily: 'Geraldton, Arial, sans-serif',
    fontWeight: 500,
  };

  const menuIconStyle: React.CSSProperties = {
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

  const activeMenuIconStyle: React.CSSProperties = {
    ...menuIconStyle,
    color: '#000000',
    opacity: 1,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#111',
    fontFamily: 'Geraldton, Arial, sans-serif',
    fontWeight: 500,
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={logoStyle}>EMPALAR MALL</div>
      </div>

      <div style={profileSectionStyle}>
        <div style={avatarContainerStyle}>
          <img 
            src={user?.photo_url || 'https://via.placeholder.com/100'} 
            alt="Profile" 
            style={avatarStyle}
          />
        </div>
        <div style={userInfoStyle}>
          <div style={nameStyle}>{user?.first_name || 'Гость'}</div>
          <div style={usernameStyle}>@{user?.username || 'username'}</div>
        </div>
      </div>

      <div style={actionsGridStyle}>
        <button style={actionButtonStyle} onClick={() => navigate('/favorites')}>
          <div style={iconWrapperStyle}>
            <FavoriteIcon style={actionIconStyle} />
          </div>
          <span style={buttonTextStyle}>Избранное</span>
        </button>
        <button style={actionButtonStyle} onClick={() => navigate('/deliveries')}>
          <div style={iconWrapperStyle}>
            <DeliveryIcon style={actionIconStyle} />
          </div>
          <span style={buttonTextStyle}>Доставки</span>
        </button>
        <button style={actionButtonStyle} onClick={() => navigate('/purchases')}>
          <div style={iconWrapperStyle}>
            <PurchaseIcon style={actionIconStyle} />
          </div>
          <span style={buttonTextStyle}>Покупки</span>
        </button>
        <button style={actionButtonStyle} onClick={() => navigate('/support')}>
          <div style={iconWrapperStyle}>
            <SupportIcon style={actionIconStyle} />
          </div>
          <span style={buttonTextStyle}>Поддержка</span>
        </button>
      </div>

      <div style={infoGridContainerStyle}>
        <button style={infoButtonStyle} onClick={() => navigate('/favorite-brands')}>
          <FavoriteBrandsIcon style={smallIconStyle} />
          <span style={infoTextStyle}>Любимые бренды</span>
        </button>
        <button style={infoButtonStyle} onClick={() => navigate('/points')}>
          <PointsIcon style={smallIconStyle} />
          <span style={infoTextStyle}>Баллы</span>
        </button>
        <button style={infoButtonStyle} onClick={() => navigate('/viewed')}>
          <ViewedIcon style={smallIconStyle} />
          <span style={infoTextStyle}>Просмотренные</span>
        </button>
        <button style={infoButtonStyle} onClick={() => navigate('/reviews')}>
          <ReviewsIcon style={smallIconStyle} />
          <span style={infoTextStyle}>Отзывы</span>
        </button>
      </div>

      <button style={bottomButtonStyle}>
        <div style={iconWithTextStyle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span style={actionLabelStyle}>Данные доставки</span>
        </div>
      </button>

      <button style={bottomButtonStyle}>
        <div style={iconWithTextStyle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span style={actionLabelStyle}>Сообщество EMPALAR MALL</span>
        </div>
      </button>

      <nav style={{
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
      }}>
        <button style={menuIconStyle} onClick={() => navigate('/')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span style={labelStyle}>Главная</span>
        </button>
        <button style={menuIconStyle} onClick={() => navigate('/catalog')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="2" ry="2"/>
            <rect x="14" y="3" width="7" height="7" rx="2" ry="2"/>
            <rect x="14" y="14" width="7" height="7" rx="2" ry="2"/>
            <rect x="3" y="14" width="7" height="7" rx="2" ry="2"/>
          </svg>
          <span style={labelStyle}>Каталог</span>
        </button>
        <button style={menuIconStyle} onClick={() => navigate('/shorts')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M2 12h20M12 2l10 10M12 2L2 12M12 22l10-10M12 22L2 12"/>
          </svg>
          <span style={labelStyle}>Шортсы</span>
        </button>
        <button style={menuIconStyle} onClick={() => navigate('/cart')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <span style={labelStyle}>Корзина</span>
        </button>
        <button style={activeMenuIconStyle} onClick={() => WebApp.showAlert('Профиль')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <span style={labelStyle}>Профиль</span>
        </button>
      </nav>
    </div>
  );
};

export default Profile; 