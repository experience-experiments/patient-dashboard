FROM node:6.5

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
