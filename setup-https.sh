#!/bin/bash

# Скрипт для настройки HTTPS на виртуальной машине
echo "🔒 Настройка HTTPS для Empalar Mall WebApp..."

# Проверяем, что передан домен
if [ -z "$1" ]; then
    echo "❌ Ошибка: Укажите домен!"
    echo "Использование: ./setup-https.sh your-domain.com"
    exit 1
fi

DOMAIN=$1

echo "🌐 Настраиваем HTTPS для домена: $DOMAIN"

# 1. Устанавливаем Nginx и Certbot
echo "📦 Устанавливаем Nginx и Certbot..."
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx

# 2. Создаем конфигурацию Nginx
echo "⚙️ Создаем конфигурацию Nginx..."
sudo tee /etc/nginx/sites-available/empalar-mall << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# 3. Активируем сайт
echo "🔗 Активируем сайт в Nginx..."
sudo ln -sf /etc/nginx/sites-available/empalar-mall /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# 4. Проверяем конфигурацию Nginx
echo "✅ Проверяем конфигурацию Nginx..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "🔄 Перезапускаем Nginx..."
    sudo systemctl reload nginx
    
    # 5. Получаем SSL сертификат
    echo "🔐 Получаем SSL сертификат от Let's Encrypt..."
    sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN
    
    if [ $? -eq 0 ]; then
        echo "🎉 HTTPS успешно настроен!"
        echo "🌐 Ваше приложение доступно по адресу: https://$DOMAIN"
        
        # 6. Настраиваем автообновление сертификата
        echo "🔄 Настраиваем автообновление сертификата..."
        (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
        
        echo "✅ Сертификат будет автоматически обновляться каждый день в 12:00"
    else
        echo "❌ Ошибка при получении SSL сертификата"
        exit 1
    fi
else
    echo "❌ Ошибка в конфигурации Nginx"
    exit 1
fi

echo "🎉 Настройка HTTPS завершена!" 