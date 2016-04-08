# Example Progressive Web App [![Build Status](https://travis-ci.org/jasonjlock/example-progressive-web-app.svg?branch=master)](https://travis-ci.org/jasonjlock/example-progressive-web-app)

A foundation for a progressive web application, using modern tools and frameworks.
Mainly, this is a way for me to stay up-to-date with new web capabilities without
having to start from scratch.

## Getting Started
Install [Docker Toolbox](https://www.docker.com/products/docker-toolbox).
```
docker-machine create --driver virtualbox default
docker-machine env default
eval "$(docker-machine env default)"
npm install
docker-compose up
```
Use the Docker host's IP address (docker-machine ip default) to see the application running in a web browser.

## Tests
```
npm run test
```

## TODO
- Properly handle static assets with Nginx
- User Docker Composer volumes to configure Nginx
- Add Travis CI
- Add a better app shell
- Set up Service Workers to cache static assets
- Add a more dynamic example
- Tests
-- Organize tests according to test type (accepance, intergration, unit)
-- Add page load time accepance test

