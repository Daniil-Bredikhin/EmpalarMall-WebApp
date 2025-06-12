# 🚀 Настройка автоматического деплоя на виртуальную машину

## 📋 Что нужно настроить:

### 1. **На виртуальной машине:**

#### Установить необходимые инструменты:
```bash
# Установить Node.js (если еще не установлен)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Установить PM2 для управления процессами
sudo npm install -g pm2

# Установить Git (если еще не установлен)
sudo apt-get install git
```

#### Клонировать репозиторий:
```bash
git clone https://github.com/Daniil-Bredikhin/EmpalarMall-WebApp.git
cd EmpalarMall-WebApp
npm install
npm run build
```

#### Запустить приложение через PM2:
```bash
pm2 start backend/index.js --name empalar-mall
pm2 save
pm2 startup
```

### 2. **Настроить HTTPS (обязательно для Telegram WebApp):**

#### Автоматическая настройка:
```bash
# Скопируйте скрипт setup-https.sh на вашу ВМ
chmod +x setup-https.sh
./setup-https.sh your-domain.com
```

#### Ручная настройка:
```bash
# Установить Nginx и Certbot
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx

# Создать конфигурацию Nginx
sudo nano /etc/nginx/sites-available/empalar-mall
# Вставьте содержимое файла nginx-config.conf

# Активировать сайт
sudo ln -s /etc/nginx/sites-available/empalar-mall /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Получить SSL сертификат
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### 3. **Настроить SSH-ключи:**

#### Создать SSH-ключ на вашем компьютере:
```bash
ssh-keygen -t ed25519 -C "github-actions-deploy"
```

#### Скопировать публичный ключ на ВМ:
```bash
ssh-copy-id username@your-vm-ip
```

### 4. **В GitHub репозитории добавить Secrets:**

Перейдите в ваш репозиторий на GitHub:
`Settings` → `Secrets and variables` → `Actions` → `New repository secret`

Добавьте следующие секреты:

- **`VM_HOST`** - IP-адрес вашей виртуальной машины
- **`VM_USER`** - имя пользователя на ВМ
- **`VM_SSH_KEY`** - содержимое приватного SSH-ключа (начинается с `-----BEGIN OPENSSH PRIVATE KEY-----`)
- **`VM_PORT`** - порт SSH (обычно 22)
- **`VM_PROJECT_PATH`** - путь к проекту на ВМ (например: `/home/username/EmpalarMall-WebApp`)

### 5. **Протестировать деплой:**

После настройки всех секретов:
1. Сделайте любой коммит и пуш
2. Перейдите в `Actions` в вашем GitHub репозитории
3. Увидите запущенный workflow "Deploy to VM"
4. Проверьте логи на наличие ошибок

## 🔧 Дополнительные настройки:

### Настроить автозапуск PM2 при перезагрузке ВМ:
```bash
pm2 startup
pm2 save
```

### Проверить статус приложения:
```bash
pm2 status
pm2 logs empalar-mall
```

### Ручной перезапуск:
```bash
pm2 restart empalar-mall
```

### Проверить статус Nginx:
```bash
sudo systemctl status nginx
sudo nginx -t
```

### Обновить SSL сертификат вручную:
```bash
sudo certbot renew
```

## 🎉 Готово!

Теперь при каждом пуше в ветку `master` приложение будет автоматически обновляться и перезапускаться на вашей виртуальной машине с HTTPS! 