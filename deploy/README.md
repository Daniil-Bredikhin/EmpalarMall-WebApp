# 🚀 Деплой EmpalarMall на Ubuntu VM

Полный набор скриптов для настройки Ubuntu сервера под React приложение.

## 📋 Требования

- Ubuntu 22.04 LTS
- Минимум: 1 CPU, 1GB RAM, 20GB SSD
- Домен (опционально, для SSL)

## 🛠️ Быстрая настройка

### 1. Подготовка сервера

```bash
# Загрузите скрипты на сервер
wget https://raw.githubusercontent.com/Daniil-Bredikhin/EmpalarMall-WebApp/master/deploy/setup-server.sh
chmod +x setup-server.sh

# Запустите настройку сервера
sudo bash setup-server.sh
```

### 2. Первый деплой

```bash
# Загрузите скрипт деплоя
wget https://raw.githubusercontent.com/Daniil-Bredikhin/EmpalarMall-WebApp/master/deploy/deploy.sh
chmod +x deploy.sh

# Запустите деплой
sudo bash deploy.sh
```

### 3. Настройка SSL (если есть домен)

```bash
# Загрузите скрипт SSL
wget https://raw.githubusercontent.com/Daniil-Bredikhin/EmpalarMall-WebApp/master/deploy/ssl-setup.sh
chmod +x ssl-setup.sh

# Настройте SSL
sudo bash ssl-setup.sh your-domain.com
```

## 📁 Структура файлов

```
/var/www/empalarmall/          # Production файлы
/var/www/empalarmall-backup/   # Бэкапы
/etc/nginx/sites-available/    # Конфигурация nginx
```

## 🔧 Полезные команды

### Мониторинг
```bash
# Статус nginx
sudo systemctl status nginx

# Логи nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Статус SSL
sudo certbot certificates
```

### Ручной деплой
```bash
cd /var/www/empalarmall
sudo bash deploy.sh
```

### Обновление сертификата
```bash
sudo certbot renew
```

## 🔒 Безопасность

- Firewall настроен автоматически
- SSH доступ разрешен
- Nginx с базовыми заголовками безопасности
- Автоматическое обновление SSL

## 🚨 Устранение неполадок

### Nginx не запускается
```bash
sudo nginx -t  # Проверка конфигурации
sudo systemctl restart nginx
```

### Проблемы с правами
```bash
sudo chown -R app:app /var/www/empalarmall
sudo chmod -R 755 /var/www/empalarmall
```

### Проблемы с SSL
```bash
sudo certbot --nginx -d your-domain.com --force-renewal
```

## 📞 Поддержка

Если возникли проблемы:
1. Проверьте логи: `sudo journalctl -u nginx`
2. Проверьте статус сервисов: `sudo systemctl status nginx`
3. Проверьте конфигурацию: `sudo nginx -t`

## 🔄 Автоматический деплой

Для автоматического деплоя при каждом push в master:

1. Создайте GitHub Actions workflow
2. Настройте SSH ключи на сервере
3. Добавьте секреты в GitHub репозиторий

Пример workflow будет добавлен позже. 