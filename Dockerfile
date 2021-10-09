FROM node:14 as build 

WORKDIR /app

COPY package.json /app/

COPY package-lock.json /app/

RUN npm install

COPY . /app/

RUN npm run build 

FROM nginx:1.15

COPY --from=build /app/build  /user/share/nginx/html