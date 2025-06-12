FROM node:20-alpine as builder

WORKDIR /app

# Копируем файлы для установки зависимостей
COPY frontend/package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY frontend .

# Собираем приложение
RUN npm run build

# Проверяем, что сборка прошла успешно
RUN ls -la dist/

# Второй этап - nginx для раздачи статики
FROM nginx:alpine

# Создаём необходимые директории
RUN mkdir -p /usr/share/nginx/html /var/log/nginx /var/cache/nginx /etc/nginx/ssl

# Копируем собранные файлы из предыдущего этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфиг nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Устанавливаем правильные права доступа
RUN chown -R nginx:nginx /usr/share/nginx/html /var/log/nginx /var/cache/nginx /etc/nginx/ssl && \
    chmod -R 755 /usr/share/nginx/html

# Открываем порты
EXPOSE 80 443

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"] 