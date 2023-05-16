FROM nginx:1.23.4-alpine-slim
COPY ../views/index.ejs /usr/share/nginx/html/index.html