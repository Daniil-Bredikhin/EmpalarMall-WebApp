#!/bin/bash

# Скрипт настройки SSL сертификата
# Использование: sudo bash ssl-setup.sh your-domain.com

set -e

if [ -z "$1" ]; then
    echo "❌ Ошибка: Укажите домен"
    echo "Использование: sudo bash ssl-setup.sh your-domain.com"
    exit 1
fi

DOMAIN=$1

echo "🔒 Настройка SSL для домена: $DOMAIN"

# Обновление nginx конфигурации с доменом
echo "🌐 Обновление nginx конфигурации..."
cat > /etc/nginx/sites-available/empalarmall << EOF
server {
    listen 80;
    server_name $DOMAIN;
    root /var/www/empalarmall;
    index index.html;

    # Gzip сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # SPA роутинг - все запросы ведут на index.html
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Кэширование статических файлов
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Безопасность
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
EOF

# Перезапуск nginx
systemctl reload nginx

# Получение SSL сертификата
echo "🔐 Получение SSL сертификата..."
certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN

# Настройка автоматического обновления сертификата
echo "⏰ Настройка автоматического обновления сертификата..."
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -

echo "✅ SSL настройка завершена!"
echo "🔒 Сайт доступен по адресу: https://$DOMAIN"
echo ""
echo "📋 Информация:"
echo "- Сертификат будет автоматически обновляться"
echo "- Проверить статус: sudo certbot certificates"
echo "- Обновить вручную: sudo certbot renew" 