FROM node:alpine

WORKDIR /clinic-service

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "run", "run-local"]