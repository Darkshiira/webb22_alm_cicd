FROM node:16-alpine

WORKDIR /webb22_alm_cicd

COPY package*.json ./

RUN npm ci --only=production

COPY . .

CMD ["node", "app.js"]







