import type { CSSProperties } from 'react'

export const containerStyle: CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#f8f8f8',
  paddingBottom: '80px',
}

export const menuStyle: CSSProperties = {
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
}

export const iconStyle: CSSProperties = {
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
}

export const activeIconStyle: CSSProperties = {
  ...iconStyle,
  color: '#000000',
  opacity: 1,
}

export const labelStyle: CSSProperties = {
  fontSize: '12px',
  color: '#111',
  fontFamily: 'Geraldton, Arial, sans-serif',
  fontWeight: 500,
}

export const headerStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
  padding: '16px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
}

export const logoStyle: CSSProperties = {
  fontFamily: 'Montserrat, Arial, sans-serif',
  color: '#111',
  fontWeight: 700,
  fontSize: '20px',
  letterSpacing: '1.2px',
  margin: '0',
  padding: '0',
  textAlign: 'center',
  lineHeight: '1.2',
}

export const searchBarStyle: CSSProperties = {
  width: '100%',
  position: 'relative',
  margin: '0 auto',
  boxSizing: 'border-box',
}

export const searchInputStyle: CSSProperties = {
  width: '100%',
  padding: '14px 20px 14px 48px',
  borderRadius: '24px',
  border: '1px solid #e0e0e0',
  fontSize: '16px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  outline: 'none',
  transition: 'all 0.2s ease',
  fontFamily: 'Geraldton, Arial, sans-serif',
  boxSizing: 'border-box',
}

export const searchIconStyle: CSSProperties = {
  position: 'absolute',
  left: '14px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#999',
}

export const contentStyle: CSSProperties = {
  padding: '16px',
  marginTop: '60px',
} 