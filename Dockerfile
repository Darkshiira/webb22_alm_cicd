FROM node:16

# Install Chrome dependencies
RUN apt-get update && apt-get install -y wget gnupg

# Install Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list
RUN apt-get update && apt-get install -y google-chrome-stable

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

