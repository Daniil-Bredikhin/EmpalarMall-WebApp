# Многоэтапная сборка для оптимизации размера образа
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json файлы
COPY package*.json ./
COPY frontend/package*.json ./frontend/
COPY backend/package*.json ./backend/

# Устанавливаем зависимости
RUN npm ci --only=production
RUN cd frontend && npm ci
RUN cd backend && npm ci

# Копируем исходный код
COPY . .

# Собираем фронтенд
RUN cd frontend && npm run build

# Продакшн образ
FROM node:18-alpine AS production

# Создаем пользователя для безопасности
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json файлы
COPY package*.json ./
COPY backend/package*.json ./backend/

# Устанавливаем только продакшн зависимости
RUN npm ci --only=production
RUN cd backend && npm ci --only=production

# Копируем собранный фронтенд и backend код
COPY --from=builder /app/frontend/dist ./backend/public
COPY backend ./backend

# Создаем .env файл если его нет
RUN touch backend/.env

# Меняем владельца файлов
RUN chown -R nodejs:nodejs /app
USER nodejs

# Открываем порт
EXPOSE 3000

# Проверка здоровья
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Запускаем приложение
CMD ["node", "backend/index.js"] 