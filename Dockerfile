FROM ubuntu:latest
MAINTAINER "Minh Nguyen"

# install node, git, express, grunt
RUN apt-get update && apt-get -y install \
    nodejs \
    npm \
    git \
  && ln -s /usr/bin/nodejs /usr/bin/node

RUN npm install -g express
#git clone repo
#https://github.com/settings/tokens
RUN git clone https://aa30d02c49d14708ae7cc88f8d88fbd552a65da0@github.com/UNAVSA/nodeSample.git nodeSample

#set working director to git repo
WORKDIR /nodeSample

# expose the ports
EXPOSE 8080
CMD [ "npm", "start" ]

# to run it 
# 1. docker build -t minhdev .
# 2. docker images -> check to see if minhdev is available
# 3. docker run --rm -ti -p 1234:8080 -d minhdev
# 4. open http://localhost:1234 
# 8080 is the port inside container, 1234 is the public port

