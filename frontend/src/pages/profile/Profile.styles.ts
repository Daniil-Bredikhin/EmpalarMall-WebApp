import type { CSSProperties } from 'react';

export const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#f8f8f8',
};

export const profileHeaderStyle: CSSProperties = {
  padding: '16px',
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

export const avatarStyle: CSSProperties = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#e0e0e0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '32px',
  color: '#666666',
};

export const usernameStyle: CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#000000',
};

export const contentStyle: CSSProperties = {
  flex: 1,
  padding: '16px',
};

export const sectionStyle: CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '16px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
};

export const sectionTitleStyle: CSSProperties = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#000000',
  marginBottom: '12px',
};

export const sectionContentStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}; 