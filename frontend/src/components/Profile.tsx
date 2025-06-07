import React from 'react';
import WebApp from '@twa-dev/sdk';

const FavoriteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const DeliveryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const PurchaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const SupportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const PointsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const FavoriteBrandsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);

const ViewedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const ReviewsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const Profile: React.FC = () => {
  const user = WebApp.initDataUnsafe.user;

  const handleBack = () => {
    WebApp.showPopup({
      title: 'Выход',
      message: 'Вы уверены, что хотите выйти?',
      buttons: [
        { id: 'cancel', type: 'cancel' },
        { id: 'confirm', type: 'destructive', text: 'Выйти' }
      ]
    }, (buttonId?: string) => {
      if (buttonId === 'confirm') {
        window.location.replace('/');
      }
    });
  };

  React.useEffect(() => {
    WebApp.BackButton.show();
    WebApp.BackButton.onClick(handleBack);
    return () => {
      WebApp.BackButton.hide();
      WebApp.BackButton.offClick(handleBack);
    };
  }, []);

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '12px',
    width: '22%',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.2s ease',
  };

  const buttonTextStyle: React.CSSProperties = {
    marginTop: '8px',
    fontSize: '12px',
    color: '#000',
    textAlign: 'center',
  };

  const fullWidthButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '12px',
    width: '100%',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.2s ease',
    justifyContent: 'flex-start',
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

      <div style={sectionStyle}>
        <div style={sectionTitleStyle}>Действия</div>
        <div style={buttonLayoutStyle}>
          <button style={buttonStyle} onClick={() => window.location.replace('/favorites')}>
            <FavoriteIcon />
            <span style={buttonTextStyle}>Избранное</span>
          </button>
          <button style={buttonStyle} onClick={() => window.location.replace('/deliveries')}>
            <DeliveryIcon />
            <span style={buttonTextStyle}>Доставки</span>
          </button>
          <button style={buttonStyle} onClick={() => window.location.replace('/purchases')}>
            <PurchaseIcon />
            <span style={buttonTextStyle}>Покупки</span>
          </button>
          <button style={buttonStyle} onClick={() => window.location.replace('/support')}>
            <SupportIcon />
            <span style={buttonTextStyle}>Поддержка</span>
          </button>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionTitleStyle}>Информация</div>
        <div style={tableLayoutStyle}>
          <div style={tableRowStyle}>
            <div style={tableCellStyle}>
              <button style={tableButtonStyle} onClick={() => window.location.replace('/points')}>
                <PointsIcon />
                <span style={tableTextStyle}>Баллы</span>
              </button>
            </div>
            <div style={tableCellStyle}>
              <button style={tableButtonStyle} onClick={() => window.location.replace('/favorite-brands')}>
                <FavoriteBrandsIcon />
                <span style={tableTextStyle}>Любимые бренды</span>
              </button>
            </div>
          </div>
          <div style={tableRowStyle}>
            <div style={tableCellStyle}>
              <button style={tableButtonStyle} onClick={() => window.location.replace('/viewed')}>
                <ViewedIcon />
                <span style={tableTextStyle}>Просмотренные</span>
              </button>
            </div>
            <div style={tableCellStyle}>
              <button style={tableButtonStyle} onClick={() => window.location.replace('/reviews')}>
                <ReviewsIcon />
                <span style={tableTextStyle}>Отзывы</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={actionsSectionStyle}>
        <button style={fullWidthButtonStyle}>
          <div style={iconWithTextStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span style={actionLabelStyle}>Данные доставки</span>
          </div>
        </button>
      </div>

      <div style={actionsSectionStyle}>
        <button style={fullWidthButtonStyle}>
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
      </div>

      <nav style={menuStyle}>
        <button style={iconStyle} onClick={() => window.location.replace('/')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span style={labelStyle}>Главная</span>
        </button>
        <button style={iconStyle} onClick={() => window.location.replace('/catalog')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="2" ry="2"/>
            <rect x="14" y="3" width="7" height="7" rx="2" ry="2"/>
            <rect x="14" y="14" width="7" height="7" rx="2" ry="2"/>
            <rect x="3" y="14" width="7" height="7" rx="2" ry="2"/>
          </svg>
          <span style={labelStyle}>Каталог</span>
        </button>
        <button style={iconStyle} onClick={() => window.location.replace('/shorts')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M2 12h20M12 2l10 10M12 2L2 12M12 22l10-10M12 22L2 12"/>
          </svg>
          <span style={labelStyle}>Шортсы</span>
        </button>
        <button style={iconStyle} onClick={() => window.location.replace('/cart')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <span style={labelStyle}>Корзина</span>
        </button>
        <button style={activeIconStyle} onClick={() => WebApp.showAlert('Профиль')}>
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

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
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

const sectionStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '16px',
  margin: '10px 16px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '16px',
};

const buttonLayoutStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
};

const iconStyle: React.CSSProperties = {
  width: '24px',
  height: '24px',
  marginRight: '12px',
};

const actionsSectionStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '16px',
  margin: '10px 16px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const iconWithTextStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
};

const actionLabelStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#000',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
};

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

const tableLayoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const tableRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
};

const tableCellStyle: React.CSSProperties = {
  flex: 1,
};

const tableButtonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '12px',
  padding: '12px',
  width: '100%',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'all 0.2s ease',
};

const tableIconStyle: React.CSSProperties = {
  width: '24px',
  height: '24px',
  marginRight: '12px',
};

const tableTextStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#000',
  textAlign: 'left',
};

export default Profile; 