# Use official PHP Apache image
FROM php:8.2.12-apache

ENV APP_ENV=production

WORKDIR /var/www/html

RUN a2enmod rewrite
RUN echo "Options -Indexes" >> /etc/apache2/apache2.conf

COPY src/ /var/www/html/

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

RUN chown -R www-data:www-data /var/www/html

USER www-data

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
 CMD curl -f http://localhost/ || exit 1