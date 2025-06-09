import type { CSSProperties } from 'react'

export const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#f8f8f8',
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
  height: '60px',
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  zIndex: 1000,
}

export const logoStyle: CSSProperties = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#000000',
  marginTop: '20px',
}

export const searchContainerStyle: CSSProperties = {
  marginTop: '80px',
  padding: '0 16px',
}

export const searchInputStyle: CSSProperties = {
  width: '100%',
  height: '40px',
  padding: '0 16px',
  borderRadius: '20px',
  border: '1px solid #e0e0e0',
  backgroundColor: '#ffffff',
  fontSize: '16px',
  outline: 'none',
}

export const contentStyle: CSSProperties = {
  flex: 1,
  padding: '16px',
  marginTop: '20px',
} 