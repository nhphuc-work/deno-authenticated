FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install -g @nestjs/cli
RUN npm install

CMD ["npm", "run", "start:dev"]
