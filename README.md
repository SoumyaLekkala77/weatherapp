# Weatherapp

This app shows current weather of Helsinki,FI with react frontend and Node.js backend

## Prerequisites

* An [openweathermap](http://openweathermap.org/) API key.

## Technologies used
### Ansible:
Orchestration framework based on Python.
[ansible](http://docs.ansible.com/ansible/intro.html)
Used to install docker and orchestrate the weatherapp deployment using docker.
### Docker:
[docker](https://www.docker.com/)
### Cloud: Any public cloud infrastructure provider : Tested on AWS EC2 
[AWS](https://aws.amazon.com/free/)
.You can access the running App using: "http://13.59.15.159:8000/". Provided my public IP of the EC2 instance is still the same. Let me know if it is not accessible, I'll check the public IP.
## How to run the app

* To run the app in local:
    * Go to the backend folder run: `npm i && npm start`
    * Go to the frontend folder run: `npm i && npm start`

* To run the app using docker:
    * Go to the backend folder run: `docker build -t weatherapp_backend . && docker run --rm -i -p 9000:9000 --name weatherapp_backend -t weatherapp_backend`
    * Go to the frontend folder and run: `docker build -t weatherapp_frontend . && docker run --rm -i -p 9000:9000 --name weatherapp_frontend -t weatherapp_frontend`
        * if not Local:
           * "curl ifconfig.me" -> get public ip of instance
           * "change ip in .env"
           * "source .env in root folder"
           * Add a environmental variable in the docker run with "-e ENDPOINT $ENDPOINT"

* To run the app using docker-compose with hot reload:
    * Go to the root folder where docker-compose.yml file is present and run `docker-compose up --build`
        * if not Local: (do these before docker-compose step above)
          * "curl ifconfig.me" -> get public ip of instance
          * "change ip in .env"
          * "source .env in root folder" `source .env; docker-compose up --build`

* To run the app using ansible:
    * From the root directory where deploy.yml is present, run: `ansible-playbook deploy.yml`
    * You can run it in verbose mode using `ansible-playbook deploy.yml -vvv`
