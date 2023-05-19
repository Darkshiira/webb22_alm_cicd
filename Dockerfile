FROM node:16

# Create a non-root user
RUN groupadd -r my-user && useradd --no-log-init -r -g my-user my-user

# Set working directory
WORKDIR /webb22_alm_cicd

# Install Chrome dependencies
RUN apt-get update && apt-get install -y wget gnupg

# Install Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list
RUN apt-get update && apt-get install -y google-chrome-stable

# Set Chrome binary path
ENV CHROME_BIN=/usr/bin/google-chrome-stable

# Copy package files
COPY package*.json ./

# Change ownership of the entire working directory to the non-root user
RUN chown -R my-user:my-user /webb22_alm_cicd

# Switch to the non-root user
USER my-user

# Create the /home/my-user directory and set permissions
RUN mkdir -p /home/my-user && \
    chown my-user:my-user /home/my-user

# Install dependencies
RUN npm install --unsafe-perm

# Install Chromedriver globally
RUN npm install chromedriver --global

# Copy the rest of the application files
COPY . .

EXPOSE 3000

# Start the application
CMD ["node", "bin/www"]
