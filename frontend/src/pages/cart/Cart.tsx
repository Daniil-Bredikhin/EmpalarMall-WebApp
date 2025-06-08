import React from 'react';

const Cart: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Корзина</h2>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px',
        marginTop: '20px'
      }}>
        <div style={{
          padding: '15px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#fff'
        }}>
          <p>Ваша корзина пуста</p>
        </div>
      </div>
    </div>
  );
};

export default Cart; 