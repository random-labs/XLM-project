# Base image
FROM node:7

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . /user/src/app

RUN npm install