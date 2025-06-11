#!/bin/bash

echo "🔄 Обновление конфигурации Nginx..."

# Проверяем права
if [ "$EUID" -ne 0 ]; then 
    echo "❌ Требуются права суперпользователя"
    exit 1
fi

# Создаем бэкап текущей конфигурации
echo "📦 Создаем бэкап текущей конфигурации..."
cp /etc/nginx/sites-enabled/mall.empalar.com /etc/nginx/sites-enabled/mall.empalar.com.backup

# Копируем новую конфигурацию
echo "📝 Копируем новую конфигурацию..."
cp nginx-site.conf /etc/nginx/sites-enabled/mall.empalar.com

# Удаляем старые конфигурации
echo "🧹 Удаляем старые конфигурации..."
rm -f /etc/nginx/sites-enabled/default
rm -f /etc/nginx/sites-enabled/empalar-mall

# Проверяем конфигурацию
echo "🔍 Проверяем конфигурацию..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Конфигурация валидна"
    
    # Перезапускаем Nginx
    echo "🔄 Перезапускаем Nginx..."
    systemctl restart nginx
    
    if [ $? -eq 0 ]; then
        echo "✅ Nginx успешно перезапущен"
        echo "🎉 Обновление завершено успешно!"
    else
        echo "❌ Ошибка при перезапуске Nginx"
        echo "🔄 Восстанавливаем бэкап..."
        cp /etc/nginx/sites-enabled/mall.empalar.com.backup /etc/nginx/sites-enabled/mall.empalar.com
        systemctl restart nginx
        exit 1
    fi
else
    echo "❌ Ошибка в конфигурации"
    echo "🔄 Восстанавливаем бэкап..."
    cp /etc/nginx/sites-enabled/mall.empalar.com.backup /etc/nginx/sites-enabled/mall.empalar.com
    exit 1
fi 