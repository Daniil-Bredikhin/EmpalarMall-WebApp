#!/bin/bash

# Обновляем сертификаты
certbot renew --quiet

# Проверяем, были ли обновлены сертификаты
if [ $? -eq 0 ]; then
    # Перезапускаем Nginx
    systemctl reload nginx
    echo "Сертификаты успешно обновлены и Nginx перезапущен"
else
    echo "Сертификаты не требуют обновления"
fi 