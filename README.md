**NOTE: THIS HAS BEEN DEPRECATED. Use [this](https://github.com/chopdgd/cookiecutter-django-reactjs) instead.  Integrates Facebooks create react app with Django :)**

# An example project for a Dockerized Django/ReactJS web application

I set this up because it was __SUCH__ a pain in the a** to set up a web application with all of the latest technologies.  I created this as a boilerplate after much research and reading of blogs. For a detailed step by step for creating this project look [here](https://gist.github.com/genomics-geek/98929a9e7ba9602fed7bfa4a5a1c5c4e/). Or you can just clone [this repo](https://github.com/genomics-geek/django_reactjs_boilerplate) and follow the [local deployment instructions](https://github.com/genomics-geek/django_reactjs_boilerplate#setup-local-environment).

This is an example of a project that uses the following technologies:
+ Docker with Docker Compose
+ Django REST APIs
+ ReactJS with Redux
+ Webpack module bundler and Hot Reloading (Uses React Hot Reloader 3!)
+ Karma with Mocha for JavaScript unit tests

## System Requirements

+ [Docker](https://www.docker.com/)
+ [Docker Compose](https://docs.docker.com/compose/)
+ [PostgreSQL](http://www.postgresql.org/)
+ [pyenv](https://github.com/yyuu/pyenv)
+ [pyenv-virtualenv](https://github.com/yyuu/pyenv-virtualenv)
+ [git](https://git-scm.com/)
+ [NodeJS 6+](https://nodejs.org/en/)
+ [NPM 3+](https://www.npmjs.com/)

## Setup Local Environment

### First things, first. Clone the repo

```
git clone https://github.com/genomics-geek/django_reactjs_boilerplate.git
```

### To setup a Dockerized development environment

In my opinion, this is the easiest way to get up and running.

#### 1. Create `.env` file

[Example .env file](https://gist.github.com/genomics-geek/98929a9e7ba9602fed7bfa4a5a1c5c4e#create-environment-variables-file---env)

#### 2. Build docker container

```
make docker-build-dev
make docker-up-dev
```

Visit [http://localhost:8000](http://localhost:8000). You should see __Hello World!__. You should now see the application running locally! Also this project is set up to use hot reloading, so you can see your changes to React components live ;)

### To setup a local development environment

If you want to a non dockerized development environment

#### 1. Set up a virtual environment - [Quick Guide to Virtual Environments](https://gist.github.com/genomics-geek/98929a9e7ba9602fed7bfa4a5a1c5c4e#file-step05-md)

```
pyenv virtualenv [name_of_venv]
```

#### 2. Install requirements

```
npm install
pip install -r requirements/local.txt
```

#### 3. Create .env file

[Example .env file](https://gist.github.com/genomics-geek/98929a9e7ba9602fed7bfa4a5a1c5c4e#create-environment-variables-file---env)

#### 4. Create the PostgreSQL database

[Quick Guide for installing PostgreSQL on MacOSX](https://gist.github.com/genomics-geek/98929a9e7ba9602fed7bfa4a5a1c5c4e#set-up-postgresql-database)

#### 5. Start the node server

Open a terminal window and run:

```
npm run watch
```

#### 7. Start the django server

Before you run python manage.py run:

```
export DJANGO_SETTINGS_MODULE=django_config.settings.local
```

Or alternatively, you can just add `--settings=django_config.settings.local` to any `python manage.py` command you run.

Open another terminal window and run:

```
python manage.py migrate
python manage.py runserver
```

  Visit [http://localhost:8000](http://localhost:8000). You should see __Hello World!__. You should now see the application running locally! Also this project is set up to use hot reloading, so you can see your changes to React components live ;)

## Languages used
+ [Python](https://www.python.org/)
+ [JavaScript](https://www.javascript.com/)
+ [JSX](https://jsx.github.io/)

## Tools used
+ [Docker 1.12.1](https://www.docker.com/)
+ [Docker compose 1.8.0](https://docs.docker.com/compose/)
+ [Django 1.10.2](https://www.djangoproject.com/)
+ [Django REST Framework 3.4.7](http://www.django-rest-framework.org/)
+ [ReactJS 15.3.2](https://facebook.github.io/react/)
+ [Redux 3.6.0](http://redux.js.org/docs/introduction/)
+ [PostgreSQL 9.6.0](http://www.postgresql.org/)
+ [NodeJS 6.7.0](https://nodejs.org/en/)
+ [NPM 3.10.7](https://www.npmjs.com/)
+ [Webpack 1.13.2](https://webpack.github.io/)

## Helpful resources
+ [Gist on setting up Django + ReactJS project](https://gist.github.com/genomics-geek/49ae04fb3d0147bc8340edf228759c36)
+ [Learn Redux from the Creator!](https://egghead.io/courses/getting-started-with-redux)
+ [More from Dan](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
+ [Dockerizing Django projects](http://ruddra.com/2016/08/14/docker-django-nginx-postgres/)
+ [Owais Lane Blog Post on Django + ReactJS with Webpack](http://owaislone.org/blog/webpack-plus-reactjs-and-django/)
+ [Extension of Owais Lane's blog post](http://geezhawk.github.io/using-react-with-django-rest-framework)
+ [YouTube Playlist on Django Rest Framework](https://www.youtube.com/playlist?list=PLEsfXFp6DpzTOcOVdZF-th7BS_GYGguAS)
+ [YouTube Playlist on ReactJS/Redux](https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)
+ [fullstackpython](http://www.fullstackpython.com/)
+ [Write your first Django App](https://docs.djangoproject.com/en/1.10/intro/tutorial01/)
+ [Quick Django tutorial](http://drksephy.github.io/2015/07/16/django/)
+ [Django REST framework](http://www.django-rest-framework.org/tutorial/1-serialization/)
+ [Using React with Django, with a little help from Webpack](http://geezhawk.github.io/using-react-with-django-rest-framework)
+ [Hot Module Replacement with Webpack](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)
+ [Example of React Hot Reloader 3](https://github.com/gaearon/redux-devtools/tree/master/examples/todomvc)
