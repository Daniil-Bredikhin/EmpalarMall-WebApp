import React, { useEffect, useState } from 'react';

interface TelegramUser {
  id: number;
  first_name: string;
  username?: string;
  photo_url?: string;
}

interface ProfileProps {
  onMenuClick: (menu: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ onMenuClick }) => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    // Получаем данные пользователя из Telegram WebApp
    const webApp = (window as any).Telegram?.WebApp;
    if (webApp) {
      const userData = webApp.initDataUnsafe?.user;
      if (userData) {
        setUser(userData);
      }
    }
  }, []);

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

  const profileSectionStyle: React.CSSProperties = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  };

  const avatarStyle: React.CSSProperties = {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const userInfoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  };

  const userNameStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    color: '#111',
  };

  const usernameStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#666',
  };

  const actionsSectionStyle: React.CSSProperties = {
    backgroundColor: '#f8f8f8',
    borderRadius: '16px',
    padding: '16px',
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

  const actionIconStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    color: '#111',
  };

  const actionLabelStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#111',
  };

  // Иконки для действий
  const PointsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  );

  const DeliveriesIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  );

  const PurchasesIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );

  const SupportIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f8f8' }}>
      {/* Шапка */}
      <header style={headerStyle}>
        <h1 style={logoStyle}>EMPALAR MALL</h1>
      </header>

      {/* Основной контент */}
      <main style={{ padding: '180px 16px 80px', maxWidth: '360px', margin: '0 auto' }}>
        {/* Профиль пользователя */}
        <div style={profileSectionStyle}>
          <img
            src={user?.photo_url || 'https://via.placeholder.com/64'}
            alt="Profile"
            style={avatarStyle}
          />
          <div style={userInfoStyle}>
            <span style={userNameStyle}>{user?.first_name || 'User'}</span>
            <span style={usernameStyle}>@{user?.username || 'username'}</span>
          </div>
        </div>

        {/* Секция действий */}
        <div style={actionsSectionStyle}>
          <div style={actionsGridStyle}>
            <button style={actionButtonStyle}>
              <PointsIcon />
              <span style={actionLabelStyle}>Баллы</span>
            </button>
            <button style={actionButtonStyle}>
              <DeliveriesIcon />
              <span style={actionLabelStyle}>Доставки</span>
            </button>
            <button style={actionButtonStyle}>
              <PurchasesIcon />
              <span style={actionLabelStyle}>Покупки</span>
            </button>
            <button style={actionButtonStyle}>
              <SupportIcon />
              <span style={actionLabelStyle}>Поддержка</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile; 