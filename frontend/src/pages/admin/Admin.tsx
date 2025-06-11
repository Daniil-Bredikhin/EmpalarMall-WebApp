import React, { useState } from 'react';
import BottomMenu from '../../components/common/BottomMenu';

const defaultStories = [
  { id: 1, name: 'Story 1', img: 'https://via.placeholder.com/70' },
  { id: 2, name: 'Story 2', img: 'https://via.placeholder.com/70' },
  { id: 3, name: 'Story 3', img: 'https://via.placeholder.com/70' },
  { id: 4, name: 'Story 4', img: 'https://via.placeholder.com/70' },
  { id: 5, name: 'Story 5', img: 'https://via.placeholder.com/70' },
];

function saveStories(stories: any[]) {
  localStorage.setItem('stories', JSON.stringify(stories));
  window.dispatchEvent(new Event('storiesUpdated'));
}

const Admin: React.FC = () => {
  const [stories, setStories] = useState(() => {
    const saved = localStorage.getItem('stories');
    return saved ? JSON.parse(saved) : defaultStories;
  });
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [activeTab, setActiveTab] = useState('stories');

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

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#f8f8f8',
    paddingBottom: '80px',
  };

  const headerStyle: React.CSSProperties = {
    padding: '16px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #e0e0e0',
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '20px',
    fontWeight: 600,
    color: '#000',
  };

  const tabContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    marginTop: '12px',
    overflowX: 'auto',
  };

  const tabStyle: React.CSSProperties = {
    padding: '8px 16px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    whiteSpace: 'nowrap',
  };

  const activeTabStyle: React.CSSProperties = {
    ...tabStyle,
    backgroundColor: '#000',
    color: '#fff',
  };

  const contentStyle: React.CSSProperties = {
    padding: '16px',
  };

  const storiesGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '16px',
    marginBottom: '24px',
  };

  const storyItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  };

  const storyImageStyle: React.CSSProperties = {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    border: '2px solid #000',
    objectFit: 'cover',
  };

  const storyNameStyle: React.CSSProperties = {
    fontSize: '12px',
    textAlign: 'center',
    color: '#000',
  };

  const deleteButtonStyle: React.CSSProperties = {
    padding: '4px 8px',
    backgroundColor: '#ff4444',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '12px',
    cursor: 'pointer',
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '400px',
  };

  const inputStyle: React.CSSProperties = {
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
  };

  const addButtonStyle: React.CSSProperties = {
    padding: '8px 16px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
  };

  const renderStoriesTab = () => (
    <div>
      <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>Управление сторис</h2>
      <div style={storiesGridStyle}>
        {stories.map((story: any) => (
          <div key={story.id} style={storyItemStyle}>
            <img src={story.img} alt={story.name} style={storyImageStyle} />
            <div style={storyNameStyle}>{story.name}</div>
            <button style={deleteButtonStyle} onClick={() => removeStory(story.id)}>
              Удалить
            </button>
          </div>
        ))}
      </div>
      <div style={formStyle}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Имя сторис"
          style={inputStyle}
        />
        <input
          value={img}
          onChange={e => setImg(e.target.value)}
          placeholder="URL картинки"
          style={inputStyle}
        />
        <button style={addButtonStyle} onClick={addStory}>
          Добавить сторис
        </button>
      </div>
    </div>
  );

  const renderProductsTab = () => (
    <div>
      <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>Управление товарами</h2>
      <p>Функционал управления товарами будет добавлен позже.</p>
    </div>
  );

  const renderOrdersTab = () => (
    <div>
      <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>Управление заказами</h2>
      <p>Функционал управления заказами будет добавлен позже.</p>
    </div>
  );

  const renderUsersTab = () => (
    <div>
      <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>Управление пользователями</h2>
      <p>Функционал управления пользователями будет добавлен позже.</p>
    </div>
  );

  const renderSettingsTab = () => (
    <div>
      <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>Настройки</h2>
      <p>Настройки приложения будут добавлены позже.</p>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'stories':
        return renderStoriesTab();
      case 'products':
        return renderProductsTab();
      case 'orders':
        return renderOrdersTab();
      case 'users':
        return renderUsersTab();
      case 'settings':
        return renderSettingsTab();
      default:
        return renderStoriesTab();
    }
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Админ-панель</h1>
        <div style={tabContainerStyle}>
          <button
            style={activeTab === 'stories' ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab('stories')}
          >
            Сторисы
          </button>
          <button
            style={activeTab === 'products' ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab('products')}
          >
            Товары
          </button>
          <button
            style={activeTab === 'orders' ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab('orders')}
          >
            Заказы
          </button>
          <button
            style={activeTab === 'users' ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab('users')}
          >
            Пользователи
          </button>
          <button
            style={activeTab === 'settings' ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab('settings')}
          >
            Настройки
          </button>
        </div>
      </header>

      <div style={contentStyle}>
        {renderContent()}
      </div>

      <BottomMenu />
    </div>
  );
};

export default Admin; 