# stock-frontend

Stock is an inventory manager that enables us to keep track on our belongings.

It is integrated with Slack, so any item can be booked or returned through that platform. It is also integrated with Twilio, so anyone who's on the waiting list for an item, will get SMS warned when that item becomes available again.

This repo contains the frontend, powered up by the Rails API in the stock-api repo. 

## Development 

To get the frontend up and running locally install Docker and then:

```shell
$ docker-compose up
```

To run commands inside the container:

```shell
$ docker-compose run web <command>
```
