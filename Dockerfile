# load image
FROM detecmedia/pimcore:5.2.1

# run as www-data
USER www-data
# change to web-root
RUN cd /var/www/html

# add new package from https://packagist.org/
RUN composer require pimcore/demo-ecommerce

# return to root user
USER root

EXPOSE 80