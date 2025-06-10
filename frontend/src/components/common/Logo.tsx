import React from 'react';
import logo from '../../assets/images/empalarmall_logo.png';

const logoContainerStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '16px 0',
  paddingTop: 'calc(env(safe-area-inset-top, 0px) + 60px)',
};

const logoImgStyle: React.CSSProperties = {
  height: '20px',
  maxWidth: '180px',
  objectFit: 'contain',
  display: 'block',
};

const Logo: React.FC = () => (
  <div style={logoContainerStyle}>
    <img src={logo} alt="EmpalarMall Logo" style={logoImgStyle} />
  </div>
);

export default Logo; 