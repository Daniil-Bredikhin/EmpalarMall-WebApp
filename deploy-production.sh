#!/bin/bash

# Полноценный скрипт развертывания на продакшн
set -e  # Останавливаем выполнение при ошибке

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Функции для логирования
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Проверяем аргументы
if [ -z "$1" ]; then
    log_error "Укажите домен!"
    echo "Использование: ./deploy-production.sh your-domain.com"
    exit 1
fi

DOMAIN=$1
PROJECT_DIR="/opt/empalar-mall"
BACKUP_DIR="/opt/backups/empalar-mall"

log_info "🚀 Начинаем развертывание Empalar Mall на домене: $DOMAIN"

# Создаем необходимые директории
log_info "📁 Создаем директории..."
sudo mkdir -p $PROJECT_DIR
sudo mkdir -p $BACKUP_DIR
sudo mkdir -p /opt/logs/empalar-mall
sudo mkdir -p /opt/ssl

# Обновляем систему
log_info "📦 Обновляем систему..."
sudo apt update && sudo apt upgrade -y

# Устанавливаем необходимые пакеты
log_info "🔧 Устанавливаем необходимые пакеты..."
sudo apt install -y curl wget git nginx certbot python3-certbot-nginx docker.io docker-compose

# Запускаем Docker сервис
log_info "🐳 Настраиваем Docker..."
sudo systemctl enable docker
sudo systemctl start docker

# Добавляем пользователя в группу docker
sudo usermod -aG docker $USER

# Клонируем или обновляем репозиторий
if [ -d "$PROJECT_DIR/.git" ]; then
    log_info "📥 Обновляем репозиторий..."
    cd $PROJECT_DIR
    git pull origin master
else
    log_info "📥 Клонируем репозиторий..."
    sudo git clone https://github.com/Daniil-Bredikhin/EmpalarMall-WebApp.git $PROJECT_DIR
    cd $PROJECT_DIR
fi

# Создаем .env файл если его нет
if [ ! -f "backend/.env" ]; then
    log_info "⚙️ Создаем файл конфигурации..."
    cat > backend/.env << EOF
NODE_ENV=production
PORT=3000
CORS_ORIGIN=https://$DOMAIN
LOG_LEVEL=info
TELEGRAM_WEBAPP_URL=https://$DOMAIN
EOF
fi

# Создаем SSL сертификат
log_info "🔐 Настраиваем SSL сертификат..."
if [ ! -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    sudo certbot certonly --standalone -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN
fi

# Копируем сертификаты
log_info "📋 Копируем SSL сертификаты..."
sudo cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem /opt/ssl/
sudo cp /etc/letsencrypt/live/$DOMAIN/privkey.pem /opt/ssl/
sudo chmod 644 /opt/ssl/fullchain.pem
sudo chmod 600 /opt/ssl/privkey.pem

# Собираем и запускаем Docker контейнеры
log_info "🐳 Собираем Docker образы..."
sudo docker-compose build --no-cache

# Останавливаем старые контейнеры если есть
log_info "🔄 Останавливаем старые контейнеры..."
sudo docker-compose down || true

# Запускаем новые контейнеры
log_info "🚀 Запускаем приложение..."
sudo docker-compose up -d

# Ждем запуска приложения
log_info "⏳ Ждем запуска приложения..."
sleep 30

# Проверяем статус
log_info "🔍 Проверяем статус приложения..."
if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
    log_success "Приложение успешно запущено!"
else
    log_error "Ошибка запуска приложения!"
    sudo docker-compose logs
    exit 1
fi

# Настраиваем автообновление сертификата
log_info "🔄 Настраиваем автообновление сертификата..."
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet && cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem /opt/ssl/ && cp /etc/letsencrypt/live/$DOMAIN/privkey.pem /opt/ssl/ && docker-compose -f $PROJECT_DIR/docker-compose.yml restart nginx") | crontab -

# Настраиваем логирование
log_info "📝 Настраиваем логирование..."
sudo tee /etc/logrotate.d/empalar-mall << EOF
/opt/logs/empalar-mall/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 root root
}
EOF

# Создаем скрипт для мониторинга
log_info "📊 Создаем скрипт мониторинга..."
sudo tee /opt/empalar-mall/monitor.sh << 'EOF'
#!/bin/bash
# Скрипт мониторинга приложения

APP_URL="http://localhost:3000/api/health"
LOG_FILE="/opt/logs/empalar-mall/monitor.log"

if ! curl -f $APP_URL > /dev/null 2>&1; then
    echo "$(date): Приложение недоступно, перезапускаем..." >> $LOG_FILE
    cd /opt/empalar-mall
    docker-compose restart app
fi
EOF

sudo chmod +x /opt/empalar-mall/monitor.sh

# Добавляем мониторинг в cron
(crontab -l 2>/dev/null; echo "*/5 * * * * /opt/empalar-mall/monitor.sh") | crontab -

log_success "🎉 Развертывание завершено успешно!"
log_info "🌐 Приложение доступно по адресу: https://$DOMAIN"
log_info "📊 Логи доступны в: /opt/logs/empalar-mall/"
log_info "🔧 Управление: cd $PROJECT_DIR && docker-compose [start|stop|restart|logs]"

# Показываем статус
log_info "📊 Текущий статус:"
sudo docker-compose ps 