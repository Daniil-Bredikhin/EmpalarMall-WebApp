FROM nginx:alpine

# Копируем конфигурацию
COPY nginx.conf /etc/nginx/nginx.conf

# Создаем директории для SSL и логов
RUN mkdir -p /etc/nginx/ssl /var/log/nginx

# Устанавливаем права
RUN chown -R nginx:nginx /var/log/nginx /var/cache/nginx /etc/nginx/ssl

# Открываем порты
EXPOSE 80 443

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"] 