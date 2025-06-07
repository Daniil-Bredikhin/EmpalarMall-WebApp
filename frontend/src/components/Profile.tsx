import React from 'react';
import WebApp from '@twa-dev/sdk';

const Profile: React.FC = () => {
  const user = WebApp.initDataUnsafe.user;

  const handleBack = () => {
    WebApp.BackButton.hide();
    window.location.href = '/'; // Возвращаемся на главную страницу
  };

  React.useEffect(() => {
    WebApp.BackButton.show();
    WebApp.BackButton.onClick(handleBack);
    return () => {
      WebApp.BackButton.hide();
      WebApp.BackButton.offClick(handleBack);
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    paddingBottom: '80px',
  };

  const headerStyle: React.CSSProperties = {
    position: 'fixed',
    top: '48px',
    left: 0,
    right: 0,
    padding: '16px',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Geraldton Medium, sans-serif',
  };

  const profileSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    marginTop: '120px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const avatarContainerStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '16px',
    border: '3px solid #007AFF',
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
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '4px',
  };

  const usernameStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#666',
  };

  const actionsSectionStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '16px',
    margin: '10px 16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const actionsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
  };

  const actionButtonStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    padding: '16px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  const actionLabelStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#111',
  };

  const menuStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-around',
    padding: '12px 0',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid #eee',
    zIndex: 1000,
  };

  const menuItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
  };

  const menuLabelStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#666',
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

      <div style={actionsSectionStyle}>
        <div style={actionsGridStyle}>
          <button style={actionButtonStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span style={actionLabelStyle}>Избранное</span>
          </button>
          <button style={actionButtonStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1" y="3" width="15" height="13"/>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            <span style={actionLabelStyle}>Доставки</span>
          </button>
          <button style={actionButtonStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span style={actionLabelStyle}>Покупки</span>
          </button>
          <button style={actionButtonStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span style={actionLabelStyle}>Поддержка</span>
          </button>
        </div>
      </div>

      <div style={menuStyle}>
        <div style={menuItemStyle} onClick={() => window.location.href = '/'}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span style={menuLabelStyle}>Главная</span>
        </div>
        <div style={menuItemStyle} onClick={() => WebApp.showAlert('Каталог')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <span style={menuLabelStyle}>Каталог</span>
        </div>
        <div style={menuItemStyle} onClick={() => WebApp.showAlert('Шортсы')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M23 7l-7 5 7 5V7z" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
          <span style={menuLabelStyle}>Шортсы</span>
        </div>
        <div style={menuItemStyle} onClick={() => WebApp.showAlert('Корзина')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span style={menuLabelStyle}>Корзина</span>
        </div>
        <div style={menuItemStyle} onClick={() => WebApp.showAlert('Профиль')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span style={menuLabelStyle}>Профиль</span>
        </div>
      </div>
    </div>
  );
};

export default Profile; 