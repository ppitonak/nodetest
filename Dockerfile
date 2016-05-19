FROM node:5.6.0

MAINTAINER Pavol Pitonak

RUN groupadd -r testuser && \
  useradd -r -g testuser -m testuser && \
  mkdir /home/testuser/app

EXPOSE 3000

WORKDIR /home/testuser/app

COPY . .

RUN npm install && \
  chown -R testuser:testuser . && \
  npm prune --production && \
  apt-get purge -y git git-man subversion perl-modules python* libmagick* \
    libstdc++-4.9-dev libgcc-4.9-dev libdjvulibre-dev libmysqlclient-dev \
    liblcms2-dev libxml2-dev wget make && \
  apt-get clean autoclean && \
  apt-get autoremove -y && \
  rm -rf /var/lib/{apt,dpkg,cache,log}

USER testuser

CMD [ "node", "main.js" ]
