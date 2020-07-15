FROM node:12

WORKDIR /app

RUN yarn install

CMD ["yarn", "start"]