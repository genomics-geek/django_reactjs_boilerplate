FROM python:3.5

ENV PYTHONUNBUFFERED 1

# Setup Debian linux
RUN export DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get -y install build-essential curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN nodejs -v && npm -v

# Requirements have to be pulled and installed here, otherwise caching won't work
COPY ./requirements /requirements
COPY package.json /app/

WORKDIR /app
COPY . /app

RUN pip install -r /requirements/production.txt \
    && groupadd -r django \
    && useradd -r -g django django \
    && npm install && npm run build-production

RUN chown -R django /app

COPY ./docker_compose/django/production/start.sh /start.sh
COPY ./docker_compose/django/entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r//' /entrypoint.sh \
    && sed -i 's/\r//' /start.sh \
    && chmod +x /entrypoint.sh \
    && chown django /entrypoint.sh \
    && chmod +x /start.sh \
    && chown django /start.sh

ENTRYPOINT ["/entrypoint.sh"]
