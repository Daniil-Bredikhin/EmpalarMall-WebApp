import React from 'react'
import { Logo } from '../../components/common/Logo'
import { containerStyle, headerStyle, contentStyle, sectionStyle, sectionTitleStyle, sectionContentStyle } from './Profile.styles'

const Profile: React.FC = () => {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <Logo />
      </header>

      <div style={{ ...contentStyle, paddingTop: '20px' }}>
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Личные данные</h2>
          <div style={sectionContentStyle}>
            <p>Имя: Иван Иванов</p>
            <p>Email: ivan@example.com</p>
            <p>Телефон: +7 (999) 123-45-67</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>История заказов</h2>
          <div style={sectionContentStyle}>
            <p>Заказ #1234 - 15.03.2024</p>
            <p>Заказ #1235 - 20.03.2024</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Избранное</h2>
          <div style={sectionContentStyle}>
            <p>Товар 1</p>
            <p>Товар 2</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Profile 