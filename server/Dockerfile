FROM node:6.5-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm install --quiet --production

EXPOSE 3000

CMD [ "npm", "start" ]
