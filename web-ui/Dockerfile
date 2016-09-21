FROM node:6.5-slim

RUN apt-get update -qq
RUN apt-get install -y nginx
RUN mkdir -p /etc/nginx/logs

RUN apt-get clean

ADD nginx.conf.prod /etc/nginx/nginx.conf

ENV APP_HOME /var/app
RUN mkdir -p $APP_HOME

WORKDIR $APP_HOME
ADD . $APP_HOME

RUN npm install --quiet
RUN npm rebuild
RUN npm run build

EXPOSE 80

CMD nginx
