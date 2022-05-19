FROM oberd/php-8.0-apache

RUN docker-php-ext-install mysqli &&  docker-php-ext-enable mysqli

WORKDIR /var/www/app

RUN a2ensite laravel

RUN sed -ri -e 's!/var/www/app/public!/var/www/app/web!g' /etc/apache2/sites-available/laravel.conf
# RUN sed -ri -e 's!/var/www/!/var/www/html/public!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf






