import React from 'react'
import type { CSSProperties } from 'react'
import { labelStyle } from '../../pages/home/Home.styles'

interface MenuIconProps {
  icon: React.ReactNode
  label: string
  onClick: () => void
  style: CSSProperties
}

export const MenuIcon: React.FC<MenuIconProps> = ({ icon, label, onClick, style }) => {
  return (
    <button
      style={style}
      onClick={onClick}
    >
      {icon}
      <span style={labelStyle}>{label}</span>
    </button>
  )
} 