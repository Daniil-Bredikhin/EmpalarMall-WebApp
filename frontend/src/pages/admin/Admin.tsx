import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BottomMenu from '../../components/common/BottomMenu';

const defaultStories = [
  { id: 1, name: 'Story 1', img: 'https://via.placeholder.com/80' },
  { id: 2, name: 'Story 2', img: 'https://via.placeholder.com/80' },
  { id: 3, name: 'Story 3', img: 'https://via.placeholder.com/80' },
  { id: 4, name: 'Story 4', img: 'https://via.placeholder.com/80' },
  { id: 5, name: 'Story 5', img: 'https://via.placeholder.com/80' },
];

function saveStories(stories: any[]) {
  localStorage.setItem('stories', JSON.stringify(stories));
  window.dispatchEvent(new Event('storiesUpdated'));
}

const AdminStories: React.FC = () => {
  const [stories, setStories] = useState(() => {
    const saved = localStorage.getItem('stories');
    return saved ? JSON.parse(saved) : defaultStories;
  });
  const [name, setName] = useState('');
  const [img, setImg] = useState('');

  const addStory = () => {
    if (!name || !img) return;
    const newStories = [...stories, { id: Date.now(), name, img }];
    setStories(newStories);
    saveStories(newStories);
    setName('');
    setImg('');
  };

  const removeStory = (id: number) => {
    const newStories = stories.filter((s: any) => s.id !== id);
    setStories(newStories);
    saveStories(newStories);
  };

  return (
    <div>
      <h2>Сторисы</h2>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        {stories.map((story: any) => (
          <div key={story.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={story.img} alt={story.name} style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #000', objectFit: 'cover' }} />
            <div style={{ fontSize: 12, marginTop: 4 }}>{story.name}</div>
            <button style={{ marginTop: 4 }} onClick={() => removeStory(story.id)}>Удалить</button>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Имя" />
        <input value={img} onChange={e => setImg(e.target.value)} placeholder="URL картинки" />
        <button onClick={addStory}>Добавить</button>
      </div>
    </div>
  );
};

const Admin: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f8f8', paddingBottom: '80px' }}>
      <header style={{ padding: '16px', backgroundColor: '#fff' }}>
        <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Админ-панель</h1>
        <nav style={{ marginTop: 12, display: 'flex', gap: 16 }}>
          <Link to="/admin">Главная</Link>
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