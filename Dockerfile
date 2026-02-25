FROM richarvey/nginx-php-fpm:latest

COPY /src /var/www/html

ENV WEBROOT=/var/www/html