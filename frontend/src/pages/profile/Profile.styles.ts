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

export const sectionStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '12px',
  padding: '20px',
  marginBottom: '20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
}

export const sectionTitleStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '16px',
  color: '#333',
}

export const sectionContentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  color: '#666',
} 