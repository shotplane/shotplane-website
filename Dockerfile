#   ____  _    _ _____ _      _____  
#  |  _ \| |  | |_   _| |    |  __ \ 
#  | |_) | |  | | | | | |    | |  | |
#  |  _ <| |  | | | | | |    | |  | |
#  | |_) | |__| |_| |_| |____| |__| |
#  |____/ \____/|_____|______|_____/ 
#   
FROM node:21-alpine3.17 AS BUILDER
WORKDIR /app
COPY package*.json ./
RUN npm update -g npm
RUN npm install
COPY . .
RUN rm -f /app/.env /app/.env.dev /app/.env.prod
ARG BUILD_ENV=prod
COPY ./.env.${BUILD_ENV} /app/.env.production
RUN npm run build

#   _____  _    _ _   _ 
#  |  __ \| |  | | \ | |
#  | |__) | |  | |  \| |
#  |  _  /| |  | | . ` |
#  | | \ \| |__| | |\  |
#  |_|  \_\\____/|_| \_|
#   
FROM nginx:alpine AS RUNNER 
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=BUILDER /app/out/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
