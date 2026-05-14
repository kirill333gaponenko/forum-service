FROM node:22.18.0-alpine

LABEL authors="kiril"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src ./src

EXPOSE 8080

CMD ["npm", "start"]