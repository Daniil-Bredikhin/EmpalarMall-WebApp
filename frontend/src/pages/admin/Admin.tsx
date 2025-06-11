import React from 'react';

const Admin: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f8f8',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: '#000', fontSize: '24px', marginBottom: '20px' }}>
        Админ-панель работает!
      </h1>
      <p style={{ color: '#666', fontSize: '16px' }}>
        Роутинг функционирует корректно
      </p>
      <div style={{ 
        marginTop: '20px', 
        padding: '16px', 
        backgroundColor: '#fff', 
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '12px' }}>Управление сторис</h2>
        <p>Здесь будет функционал управления сторис</p>
      </div>
    </div>
  );
};

export default Admin; 