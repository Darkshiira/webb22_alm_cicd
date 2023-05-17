FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /webb22_alm_cicd

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["node", "app.js"]