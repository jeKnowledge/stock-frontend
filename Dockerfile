FROM node:6.4.0
RUN apt-get update -qq && apt-get install -y build-essential
RUN mkdir /src
WORKDIR /src
ADD package.json /src/package.json
RUN npm install 
ADD . /src
