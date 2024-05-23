#   _____  _    _ _   _ 
#  |  __ \| |  | | \ | |
#  | |__) | |  | |  \| |
#  |  _  /| |  | | . ` |
#  | | \ \| |__| | |\  |
#  |_|  \_\\____/|_| \_|
#   
FROM nginx:alpine AS RUNNER 

COPY nginx.conf     /etc/nginx/nginx.conf

RUN mkdir -p        /usr/share/nginx/html
COPY index.html     /usr/share/nginx/html/index.html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
