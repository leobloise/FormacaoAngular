FROM node:14-alpine
COPY . /app
WORKDIR /app
RUN npm install -g @angular/cli
RUN npm install
EXPOSE 4200
ENTRYPOINT ["npm", "start"]
