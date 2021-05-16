FROM node:alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3081

CMD ["npm", "run", "run-local"]