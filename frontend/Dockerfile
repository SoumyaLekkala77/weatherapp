FROM node:16-alpine

WORKDIR /frontend
COPY ./package.json /frontend
RUN npm install
RUN apk add --no-cache openssl
COPY . .

EXPOSE 8000

CMD npm start
