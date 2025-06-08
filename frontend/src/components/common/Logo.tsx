import React from 'react'

interface LogoProps {
  style?: React.CSSProperties
}

export const Logo: React.FC<LogoProps> = ({ style }) => {
  return (
    <div style={{ 
      fontSize: '24px', 
      fontWeight: 'bold', 
      color: '#007AFF',
      ...style 
    }}>
      EmpalarMall
    </div>
  )
} 