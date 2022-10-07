FROM node:16-alpine
LABEL author="Alexandre JUBLOT"
COPY . /app
WORKDIR /app

RUN npm install
CMD npm run start