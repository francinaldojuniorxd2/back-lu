# Installation

```
    yarn install

```

## Start

```
    docker compose up

```

## build

```
 yarn build

```

## Start docker

```
docker run --mount source=file-my-app,target=/files -d --env-file .env  -p 8001:8001 soneca20/app_lumi:<version>

```
