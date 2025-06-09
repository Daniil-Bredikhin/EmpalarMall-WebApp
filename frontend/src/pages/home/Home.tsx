import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomMenu from '../../components/common/BottomMenu';
import {
  containerStyle,
  headerStyle,
  logoStyle,
  contentStyle
} from './Home.styles';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div style={logoStyle}>EMPALAR MALL</div>
      </header>

      <div style={contentStyle}>
        {/* Контент страницы */}
      </div>

      <BottomMenu />
    </div>
  );
};

export default Home; 