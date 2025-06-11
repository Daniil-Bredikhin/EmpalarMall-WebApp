const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Обработка ошибок
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

app.use(cors());
app.use(express.json());

// API роуты
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'EMPALAR MALL backend is running!' });
});

// Раздача статических файлов React
app.use(express.static(path.join(__dirname, 'public')));

// Fallback для SPA routing - все остальные запросы возвращают index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 Server is accessible at: http://0.0.0.0:${PORT}`);
  console.log(`📁 Frontend will be served from: ${path.join(__dirname, 'public')}`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📊 Memory usage: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`);
});
