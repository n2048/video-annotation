# Create environment


```
docker-compose up -d
```

## MINIO

bucket : /videos

### Env variables
MINIO_ACCESS_KEY: dml-minio
MINIO_SECRET_KEY: dml-minio

## API

http://localhost:8000/api/videos

### Env variables
MINIO_ACCESS_KEY: dml-minio
MINIO_SECRET_KEY: dml-minio
MINIO_ENDPOINT: bucket
MINIO_PORT: 9000
MINIO_SECURITY: "false"
MINIO_BUCKET: videos

## FRONTENT

http://localhost:3000/?

### Env variables
BACKEND: http://localhost:8000

## Database administration:

http://localhost:8080/

System: PostgreSQL
Server: db
Username: dml
Password: dansemachinelarning
Database: dml
