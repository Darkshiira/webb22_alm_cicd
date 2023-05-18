# Use a minimal base image
FROM node:16-alpine

# Install Chrome dependencies
RUN apk add --no-cache wget gnupg

# Install Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --import
RUN wget -q -O /etc/apk/keys/google-chrome.asc https://dl.google.com/linux/linux_signing_key.pub
RUN echo "http://dl.google.com/linux/chrome/stable/main" > /etc/apk/repositories
RUN echo "@edge http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories
RUN apk add --no-cache google-chrome-stable@edge

# Set Chrome binary path
ENV CHROME_BIN=/usr/bin/google-chrome-stable

# Set working directory
WORKDIR /webb22_alm_cicd

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Install Chromedriver globally
RUN npm install chromedriver --global

# Copy the rest of the application files
COPY . .

# Start the application
CMD ["node", "app.js"]