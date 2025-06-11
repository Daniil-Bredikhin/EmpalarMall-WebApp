#!/bin/bash

# Скрипт настройки Ubuntu сервера для React приложения
# Запускать с правами sudo: sudo bash setup-server.sh

set -e  # Остановка при ошибке

echo "🚀 Начинаем настройку сервера для React приложения..."

# Обновление системы
echo "📦 Обновление системы..."
apt update && apt upgrade -y

# Установка необходимых пакетов
echo "📦 Установка nginx, Node.js и других пакетов..."
apt install -y nginx nodejs npm curl git ufw certbot python3-certbot-nginx

# Настройка firewall
echo "🔥 Настройка firewall..."
ufw allow ssh
ufw allow 'Nginx Full'
ufw --force enable

# Создание пользователя для приложения
echo "👤 Создание пользователя app..."
useradd -m -s /bin/bash app || echo "Пользователь app уже существует"
usermod -aG sudo app

# Создание директории для приложения
echo "📁 Создание директорий..."
mkdir -p /var/www/empalarmall
chown -R app:app /var/www/empalarmall

# Настройка nginx
echo "🌐 Настройка nginx..."
cat > /etc/nginx/sites-available/empalarmall << 'EOF'
server {
    listen 80;
    server_name _;
    root /var/www/empalarmall;
    index index.html;

    # Gzip сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # SPA роутинг - все запросы ведут на index.html
    location / {
        try_files $uri $uri/ /index.html;
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

# Активация сайта
ln -sf /etc/nginx/sites-available/empalarmall /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Проверка конфигурации nginx
nginx -t

# Перезапуск nginx
systemctl restart nginx
systemctl enable nginx

# Настройка systemd для автоматического деплоя
echo "⚙️ Настройка systemd сервиса..."
cat > /etc/systemd/system/empalarmall-deploy.service << 'EOF'
[Unit]
Description=EmpalarMall Deploy Service
After=network.target

[Service]
Type=oneshot
User=app
WorkingDirectory=/var/www/empalarmall
ExecStart=/var/www/empalarmall/deploy.sh
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable empalarmall-deploy.service

echo "✅ Настройка сервера завершена!"
echo ""
echo "📋 Следующие шаги:"
echo "1. Загрузите файлы приложения в /var/www/empalarmall"
echo "2. Запустите: sudo bash /var/www/empalarmall/deploy.sh"
echo "3. Настройте SSL: sudo certbot --nginx -d your-domain.com"
echo ""
echo "🔧 Полезные команды:"
echo "sudo systemctl status nginx"
echo "sudo nginx -t"
echo "sudo journalctl -u nginx" 