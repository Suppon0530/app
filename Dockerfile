FROM node:22-bookworm

USER node
WORKDIR /home/node/app

COPY --chmod=0755 package.json /home/node/app/ 

RUN npm install