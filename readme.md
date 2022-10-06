# Zaion technical test

This repository contains the code for the technical test for the Zaion recruitment process.

## Summary
The goal is to implement a service that computes the surface where water can be retained by one building on each side.
See the (french) [subject](docs/app/subject.pdf) for more information.

## Installation
### Requirements
Either :
- NodeJS and NPM
- Docker and Docker Compose

### Install (node and npm version)
```bash
npm install
```
### Install (docker version)
```bash
docker-compose build
```

## Usage (node and npm version)
### Run the app (production mode)
```bash
npm run start
```
### Run the app (development mode)
```bash
npm run start:dev
```
### Run the tests
```bash
npm run test
```
### Run the linter
```bash
npm run lint
```

## Usage (docker version)
### Run the service (production mode)
```bash
docker-compose up
```

### Run the app (development mode)
```bash
docker-compose -f docker-compose.dev.yml up
```

## Extending the app
See how to [extend the app](docs/app/extend.md) to add new endpoint to the API.

## Services principles
See the [UnoptimizedService](docs/services/UnoptimizedService.md) and [OptimizedService](docs/services/OptimizedService.md) to understand how the services are implemented.

