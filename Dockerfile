FROM node:latest
MAINTAINER Alex Konrad
ENV NODE_ENV=DEV
ENV PORT=3000
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start
EXPOSE $PORT