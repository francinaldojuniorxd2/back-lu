# Installation

```
    yarn install

```

## Start in development

```
    docker compose up

```
## Test
```
    yarn test

```

## Transpiler with babel

```
 yarn build

```
## Docker image

```
sudo docker build --no-cache . -t <account-docker>/app_lumi:<version> -f DockerFile

```

## Start docker in prod

```
docker run --mount source=file-my-app,target=/files -d --env-file .env  -p 8001:8001 soneca20/app_lumi:<version>

```
