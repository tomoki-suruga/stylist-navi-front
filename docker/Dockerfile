FROM node:16.13

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

COPY ./frontend-app ./

RUN npm install -g nodemon && npm install -g npm@latest

EXPOSE 5000

CMD [ "npm", "start" ]