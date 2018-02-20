# Base image
FROM node:7

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install

COPY ./ /usr/src/app
