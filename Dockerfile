FROM golang:1.10.2-alpine3.7 AS build
RUN apk --no-cache add gcc g++ make ca-certificates
<<<<<<< HEAD
WORKDIR /go/src/github.com/juniarta/fsn
=======
WORKDIR /go/src/github.com/tinrab/meower
>>>>>>> b87cb8c0b17c81adb089e1ffcf4d41ff0486edda

COPY Gopkg.lock Gopkg.toml ./
COPY vendor vendor
COPY util util
COPY event event
COPY db db
COPY search search
COPY schema schema
COPY meow-service meow-service
COPY query-service query-service
COPY pusher-service pusher-service

RUN go install ./...

FROM alpine:3.7
WORKDIR /usr/bin
COPY --from=build /go/bin .
