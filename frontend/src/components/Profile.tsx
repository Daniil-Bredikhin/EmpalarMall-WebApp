import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';
import BottomMenu from './common/BottomMenu';

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
    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
  </svg>
);

const PurchaseIcon: React.FC<IconProps> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);

const SupportIcon: React.FC<IconProps> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const SavedIcon: React.FC<IconProps> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
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

const BonusIcon: React.FC<IconProps> = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
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
    paddingBottom: '120px',
  };

  const profileSectionStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '24px 16px',
    marginTop: 0,
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

  const buttonTextStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#000',
    textAlign: 'center',
    marginTop: '4px',
  };

  const infoGridContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
    backgroundColor: '#f0f0f0',
    marginBottom: '8px',
  };

  const actionIconStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    color: '#000000',
  };

  const bottomButtonStyle: React.CSSProperties = {
    width: '100%',
    padding: '16px',
    backgroundColor: '#fff',
    border: 'none',
    borderBottom: '1px solid #f0f0f0',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const iconWithTextStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
  };

  const actionLabelStyle: React.CSSProperties = {
    fontSize: '15px',
    color: '#000',
    fontWeight: 500,
  };

  return (
    <div style={containerStyle}>
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
        <button style={actionButtonStyle} onClick={() => window.open('https://t.me/empalarsupport', '_blank')}>
          <div style={iconWrapperStyle}>
            <SupportIcon style={actionIconStyle} />
          </div>
          <span style={buttonTextStyle}>Поддержка</span>
        </button>
      </div>

      <div style={infoGridContainerStyle}>
        <button style={bottomButtonStyle} onClick={() => navigate('/saved')}>
          <div style={iconWithTextStyle}>
            <SavedIcon style={actionIconStyle} />
            <span style={actionLabelStyle}>Отложенные</span>
          </div>
        </button>

        <button style={bottomButtonStyle} onClick={() => navigate('/bonus')}>
          <div style={iconWithTextStyle}>
            <BonusIcon style={actionIconStyle} />
            <span style={actionLabelStyle}>Бонусы</span>
          </div>
        </button>

        <button style={bottomButtonStyle} onClick={() => navigate('/viewed')}>
          <div style={iconWithTextStyle}>
            <ViewedIcon style={actionIconStyle} />
            <span style={actionLabelStyle}>Просмотренные</span>
          </div>
        </button>

        <button style={bottomButtonStyle} onClick={() => navigate('/reviews')}>
          <div style={iconWithTextStyle}>
            <ReviewsIcon style={actionIconStyle} />
            <span style={actionLabelStyle}>Отзывы</span>
          </div>
        </button>
      </div>

      <button style={bottomButtonStyle}>
        <div style={iconWithTextStyle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
            <line x1="7" y1="7" x2="7.01" y2="7"/>
          </svg>
          <span style={actionLabelStyle}>Любимые бренды</span>
        </div>
      </button>

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

      <BottomMenu />
    </div>
  );
};

export default Profile; 