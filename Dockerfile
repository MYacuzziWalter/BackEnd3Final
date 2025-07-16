FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

copy . .

EXPOSE 8081

CMD ["node src/app.js"]

# Debo crear el docker utilizando el comando "docker build -t ultimo-servidor ."