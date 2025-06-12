#!/bin/bash

# Скрипт деплоя React приложения
# Запускать из директории /var/www/empalarmall

set -e

echo "🚀 Начинаем деплой EmpalarMall..."

# Переменные
REPO_URL="https://github.com/Daniil-Bredikhin/EmpalarMall-WebApp.git"
BUILD_DIR="/tmp/empalarmall-build"
PROD_DIR="/var/www/empalarmall"
BACKUP_DIR="/var/www/empalarmall-backup"

# Создание временной директории
mkdir -p $BUILD_DIR
cd $BUILD_DIR

# Клонирование/обновление репозитория
echo "📥 Клонирование репозитория..."
if [ -d ".git" ]; then
    git pull origin master
else
    git clone $REPO_URL .
fi

# Переход в frontend директорию
cd frontend

# Установка зависимостей
echo "📦 Установка зависимостей..."
npm ci --production=false

# Сборка приложения
echo "🔨 Сборка приложения..."
npm run build

# Создание бэкапа текущей версии
echo "💾 Создание бэкапа..."
if [ -d "$PROD_DIR" ]; then
    mkdir -p $BACKUP_DIR
    cp -r $PROD_DIR/* $BACKUP_DIR/ 2>/dev/null || true
fi

# Очистка production директории
echo "🧹 Очистка production директории..."
rm -rf $PROD_DIR/*

# Копирование собранных файлов
echo "📋 Копирование файлов..."
cp -r dist/* $PROD_DIR/

# Установка правильных прав
echo "🔐 Установка прав доступа..."
chown -R app:app $PROD_DIR
chmod -R 755 $PROD_DIR

# Очистка временных файлов
echo "🧹 Очистка временных файлов..."
rm -rf $BUILD_DIR

# Перезапуск nginx
echo "🔄 Перезапуск nginx..."
systemctl reload nginx

echo "✅ Деплой завершен успешно!"
echo "🌐 Приложение доступно по адресу: http://$(curl -s ifconfig.me)"
echo ""
echo "📋 Информация:"
echo "- Production директория: $PROD_DIR"
echo "- Бэкап: $BACKUP_DIR"
echo "- Логи nginx: /var/log/nginx/access.log"
echo ""
echo "🔧 Полезные команды:"
echo "sudo systemctl status nginx"
echo "sudo tail -f /var/log/nginx/error.log" 