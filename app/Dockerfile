FROM node:14.17.0 As development

WORKDIR /app

COPY ./app/package.json ./

RUN yarn install --only=development

COPY . .