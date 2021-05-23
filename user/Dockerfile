FROM node:alpine

WORKDIR /user-service

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "run-local"]