FROM node:alpine

WORKDIR /notifications-service

COPY ./notificationssvc/package.json .

RUN npm install

COPY ./notificationssvc/src ./src
COPY ./notificationssvc/tsconfig.json .

EXPOSE 3081

CMD ["npm", "run", "run-local"]
