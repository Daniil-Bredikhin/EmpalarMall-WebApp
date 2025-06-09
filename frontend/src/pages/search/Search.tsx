import React from 'react';
import BottomMenu from '../../components/common/BottomMenu';

const Search: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f8f8', paddingBottom: '80px' }}>
      <header style={{ padding: '16px', backgroundColor: '#fff' }}>
        <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Поиск</h1>
      </header>

      <div style={{ padding: '16px' }}>
        {/* Контент страницы поиска */}
      </div>

      <BottomMenu />
    </div>
  );
};

export default Search; 