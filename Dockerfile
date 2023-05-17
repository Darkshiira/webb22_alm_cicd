FROM node:16-alpine

WORKDIR /webb22_alm_cicd

COPY package*.json ./

RUN npm ci --only=production

RUN npm install chromedriver --global

COPY . .

CMD ["node", "app.js"]
