FROM daocloud.io/library/nginx:mainline
COPY default.conf /etc/nginx/conf.d/
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./dist /usr/src/app
RUN nginx -t -c /etc/nginx/nginx.conf
