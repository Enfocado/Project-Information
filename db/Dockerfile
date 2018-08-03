FROM mysql:5.7

ENV MYSQL_DATABASE projectInformation  
ENV MYSQL_USER root  
ENV MYSQL_ALLOW_EMPTY_PASSWORD yes

ADD schema.sql /docker-entrypoint-initdb.d