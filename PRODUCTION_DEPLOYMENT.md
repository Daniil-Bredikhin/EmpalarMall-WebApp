# 🚀 Полноценное развертывание Empalar Mall на продакшн

## 📋 Обзор улучшений

### ✅ **Добавленные лучшие практики:**
- **Безопасность**: Helmet, Rate limiting, CORS, Security headers
- **Контейнеризация**: Docker + Docker Compose
- **Проксирование**: Nginx с оптимизацией
- **SSL/HTTPS**: Let's Encrypt с автообновлением
- **Мониторинг**: Health checks, логирование, автоматический перезапуск
- **Переменные окружения**: Конфигурация через .env файлы
- **CI/CD**: GitHub Actions для автоматического деплоя

---

## 🎯 Пошаговое развертывание

### **Этап 1: Подготовка виртуальной машины**

#### 1.1 Подключитесь к ВМ:
```bash
ssh username@your-vm-ip
```

#### 1.2 Обновите систему:
```bash
sudo apt update && sudo apt upgrade -y
```

#### 1.3 Установите базовые пакеты:
```bash
sudo apt install -y curl wget git
```

---

### **Этап 2: Автоматическое развертывание (рекомендуется)**

#### 2.1 Скопируйте скрипт на ВМ:
```bash
# На вашем локальном компьютере
scp deploy-production.sh username@your-vm-ip:~/
```

#### 2.2 Запустите автоматическое развертывание:
```bash
# На ВМ
chmod +x deploy-production.sh
./deploy-production.sh your-domain.com
```

**Важно:** Замените `your-domain.com` на ваш реальный домен.

---

### **Этап 3: Ручное развертывание (альтернатива)**

Если хотите контролировать каждый шаг:

#### 3.1 Установите Docker:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

#### 3.2 Клонируйте репозиторий:
```bash
sudo git clone https://github.com/Daniil-Bredikhin/EmpalarMall-WebApp.git /opt/empalar-mall
cd /opt/empalar-mall
```

#### 3.3 Создайте .env файл:
```bash
cat > backend/.env << EOF
NODE_ENV=production
PORT=3000
CORS_ORIGIN=https://your-domain.com
LOG_LEVEL=info
TELEGRAM_WEBAPP_URL=https://your-domain.com
EOF
```

#### 3.4 Соберите и запустите:
```bash
sudo docker-compose build
sudo docker-compose up -d
```

---

## 🔧 Управление приложением

### **Основные команды:**
```bash
cd /opt/empalar-mall

# Статус контейнеров
sudo docker-compose ps

# Логи приложения
sudo docker-compose logs app

# Логи Nginx
sudo docker-compose logs nginx

# Перезапуск приложения
sudo docker-compose restart app

# Остановка всех сервисов
sudo docker-compose down

# Запуск всех сервисов
sudo docker-compose up -d
```

### **Мониторинг:**
```bash
# Проверка здоровья приложения
curl http://localhost:3000/api/health

# Просмотр логов
tail -f /opt/logs/empalar-mall/*.log

# Статус системы
sudo systemctl status docker
sudo systemctl status nginx
```

---

## 🔒 Безопасность

### **Настроенные меры безопасности:**
- ✅ Helmet.js для HTTP заголовков
- ✅ Rate limiting (100 запросов/15 мин на API)
- ✅ CORS с настройкой origin
- ✅ SSL/TLS с современными протоколами
- ✅ Security headers в Nginx
- ✅ Контейнеризация с непривилегированным пользователем

### **Дополнительные рекомендации:**
```bash
# Настройка файрвола
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# Регулярные обновления
sudo apt update && sudo apt upgrade -y
```

---

## 📊 Мониторинг и логирование

### **Автоматический мониторинг:**
- ✅ Health checks каждые 30 секунд
- ✅ Автоматический перезапуск при сбоях
- ✅ Ротация логов (52 файла, ежедневно)
- ✅ Мониторинг каждые 5 минут

### **Логи:**
- Приложение: `/opt/logs/empalar-mall/`
- Nginx: `/var/log/nginx/`
- Docker: `docker-compose logs`

---

## 🔄 Обновления

### **Автоматическое обновление через GitHub Actions:**
1. Настройте Secrets в GitHub репозитории
2. При каждом пуше в `master` происходит автоматический деплой
3. Приложение перезапускается с новым кодом

### **Ручное обновление:**
```bash
cd /opt/empalar-mall
sudo git pull origin master
sudo docker-compose build
sudo docker-compose up -d
```

---

## 🚨 Устранение неполадок

### **Приложение не запускается:**
```bash
# Проверить логи
sudo docker-compose logs app

# Проверить статус
sudo docker-compose ps

# Перезапустить
sudo docker-compose restart app
```

### **SSL сертификат не работает:**
```bash
# Обновить сертификат
sudo certbot renew

# Перезапустить Nginx
sudo docker-compose restart nginx
```

### **Проблемы с доменом:**
```bash
# Проверить DNS
nslookup your-domain.com

# Проверить порты
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
```

---

## 📈 Производительность

### **Оптимизации:**
- ✅ Gzip сжатие для статических файлов
- ✅ Кэширование статических ресурсов (1 год)
- ✅ HTTP/2 поддержка
- ✅ Оптимизированные Docker образы
- ✅ Rate limiting для защиты от DDoS

### **Масштабирование:**
```bash
# Увеличить количество экземпляров приложения
sudo docker-compose up -d --scale app=3
```

---

## 🎉 Готово!

После выполнения всех шагов ваше приложение будет:
- ✅ Работать на HTTPS
- ✅ Автоматически обновляться
- ✅ Мониториться и перезапускаться при сбоях
- ✅ Защищено современными мерами безопасности
- ✅ Оптимизировано для производительности

**Доступно по адресу: https://your-domain.com** 