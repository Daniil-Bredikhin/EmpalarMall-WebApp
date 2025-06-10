import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BottomMenu from '../../components/common/BottomMenu';

const AdminStories: React.FC = () => {
  return <div>Управление сторисами (будет реализовано)</div>;
};

const Admin: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f8f8', paddingBottom: '80px' }}>
      <header style={{ padding: '16px', backgroundColor: '#fff' }}>
        <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Админ-панель</h1>
        <nav style={{ marginTop: 12, display: 'flex', gap: 16 }}>
          <Link to="/admin/">Главная</Link>
          <Link to="/admin/products">Товары</Link>
          <Link to="/admin/categories">Категории</Link>
          <Link to="/admin/orders">Заказы</Link>
          <Link to="/admin/users">Пользователи</Link>
          <Link to="/admin/settings">Настройки</Link>
          <Link to="/admin/stories">Сторисы</Link>
        </nav>
      </header>

      <div style={{ padding: '16px' }}>
        <Routes>
          <Route path="/" element={<div>Главная админ-панели</div>} />
          <Route path="/products" element={<div>Управление товарами</div>} />
          <Route path="/categories" element={<div>Управление категориями</div>} />
          <Route path="/orders" element={<div>Управление заказами</div>} />
          <Route path="/users" element={<div>Управление пользователями</div>} />
          <Route path="/settings" element={<div>Настройки</div>} />
          <Route path="/stories" element={<AdminStories />} />
        </Routes>
      </div>

      <BottomMenu />
    </div>
  );
};

export default Admin; 