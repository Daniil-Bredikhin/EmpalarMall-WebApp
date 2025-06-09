import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuIcon } from '../../components/common/MenuIcon'
import {
  HomeIcon,
  CatalogIcon,
  ShortsIcon,
  CartIcon,
  ProfileIcon,
  SearchIcon
} from '../../components/icons/MenuIcons'
import {
  menuStyle,
  iconStyle,
  activeIconStyle,
  headerStyle,
  logoStyle,
  searchBarStyle,
  searchInputStyle,
  searchIconStyle,
  contentStyle
} from './Home.styles'
import WebApp from '@twa-dev/sdk'
import BottomMenu from '../../components/common/BottomMenu'

// Главный компонент домашней страницы Mini App
// Отображает основное меню и управляет навигацией
interface HomeProps {
  onMenuClick: (menu: string) => void
}

const Home: React.FC<HomeProps> = ({ onMenuClick }) => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [activeMenu, setActiveMenu] = useState('home')
  const [currentPage, setCurrentPage] = useState('home')
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

  useEffect(() => {
    // Запрещаем масштабирование
    const meta = document.createElement('meta')
    meta.name = 'viewport'
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    document.head.appendChild(meta)

    return () => {
      document.head.removeChild(meta)
    }
  }, [])

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu)
    setCurrentPage(menu)
    onMenuClick(menu)
  }

  const handleSearchFocus = () => {
    setIsKeyboardVisible(true)
  }

  const handleSearchBlur = () => {
    setIsKeyboardVisible(false)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <div>Главная страница</div>
      case 'catalog':
        return <div>Каталог</div>
      case 'shorts':
        return <div>Шортсы</div>
      case 'cart':
        return <div>Корзина</div>
      case 'profile':
        return null
      default:
        return <div>Главная страница</div>
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f8f8' }}>
      {/* Шапка */}
      <header style={headerStyle}>
        <h1 style={logoStyle}>EMPALAR MALL</h1>
        <div style={searchBarStyle}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            placeholder="Поиск товаров..."
            style={searchInputStyle}
          />
          <div style={searchIconStyle}>
            <SearchIcon />
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main style={contentStyle}>
        {renderPage()}
      </main>

      <BottomMenu />
    </div>
  )
}

export default Home 