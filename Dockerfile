# Базовый образ
FROM node:20-alpine

# Устанавливаем curl для health check
RUN apk add --no-cache curl

# Создаем пользователя для безопасности
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json файлы
COPY package*.json ./
COPY backend/package*.json ./backend/

# Устанавливаем только продакшн зависимости
RUN npm install --only=production
RUN cd backend && npm install --only=production

# Копируем backend код
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
  CMD curl -f http://localhost:3000/api/health || exit 1

# Запускаем приложение
CMD ["node", "backend/index.js"] 