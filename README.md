# connected-nodejs-services

Two very simple nodejs services. Service A is calling service B when requested.
Example to show different local deployment methods

## local with nodejs

Run both services in separate node processes direct on your machine.

**Requirements**
- nodejs and npm installed

```bash
cd serviceB
npm i
npm run start
```

```bash
cd serviceA
npm i
npm run start
```

open `localhost:8080` (serviceA) or `localhost:8081` (serviceB)

## docker compose

Use docker to run both node processes in separate docker containers and connect them using docker compose.

**Requirements**
- [docker](https://docs.docker.com/get-docker/) installed and running

```bash
docker compose up
````

open `localhost:100` (serviceA) or `localhost:80` (serviceB)

## docker + kubernetes

Use docker to build images for both services and kubernetes to deploy the images on a local minikube.
Both services will have two pods (instances) and a loadbalancer to coordinate the traffic.

**Requirements**
- [docker](https://docs.docker.com/get-docker/) installed and running
- [minikube](https://minikube.sigs.k8s.io/docs/start/) installed and running `minikube start`

Alt 1:
```bash
docker compose -p simple build
minikube image load simple_service-a # load docker image into minikube
minikube image load simple_service-b # load docker image into minikube
minikube tunnel # necessary to use the loadbalancer feature of kubernetes
```

Alt 2:
```bash
(minikube docker-env) # connect docker to use minikube instance
docker compose -p simple build
kubectl create -f kubernetes.yml
minikube tunnel # necessary to use the loadbalancer feature of kubernetes
```

open `127.0.0.1:100` (serviceA) or `127.0.0.1:120` (serviceB)
