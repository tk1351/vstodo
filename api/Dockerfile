FROM node:14.17.0 As development

WORKDIR /api

COPY ./api/package.json ./

RUN yarn install --only=development

COPY . .