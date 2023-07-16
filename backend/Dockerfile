FROM node:alpine

WORKDIR /backend
COPY ./package.json /backend
RUN npm install
COPY . .

EXPOSE 9000

CMD npm start
