FROM nginx:1.23.4-alpine-slim
COPY ./index.html /usr/share/nginx/html/index.html