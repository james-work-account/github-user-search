FROM node:8.10.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/app/

RUN npm install --production

# Bundle app source
COPY . /usr/src/app

EXPOSE 4000

CMD ["npm", "run", "app"]