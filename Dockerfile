FROM node:latest
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot
COPY . /usr/src/bot/
RUN npm install && npm run build
RUN echo $PATH
RUN echo $VIRTUAL_PATH
# RUN --mount=type=secret,id=configsec,destination=/usr/src/bot/src/config.json npm run build
CMD npm run start