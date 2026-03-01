# Use official PHP Apache image (specific version)
FROM php:8.2.12-apache

# Set environment variables
ENV APP_ENV=production

# Set working directory
WORKDIR /var/www/html

# Enable Apache rewrite
RUN a2enmod rewrite

# Disable directory listing (security)
RUN echo "Options -Indexes" >> /etc/apache2/apache2.conf

# Copy application files
COPY src/ /var/www/html/

# Install curl for healthcheck
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Set correct ownership
RUN chown -R www-data:www-data /var/www/html

# Switch to non-root user
USER www-data

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
 CMD curl -f http://localhost/ || exit 1