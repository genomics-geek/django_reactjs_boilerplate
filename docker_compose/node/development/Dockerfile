FROM node:latest

COPY . /app

WORKDIR /app
RUN npm install

COPY ./docker_compose/node/development/start.sh /start.sh
RUN sed -i 's/\r//' /start.sh
RUN chmod +x /start.sh
