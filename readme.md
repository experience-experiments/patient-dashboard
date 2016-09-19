# Patient Dashboard App

This is the source code repository for the Patient Dashboard App. 

This repository is organised as a multi-module repo. Each individual component of the application is located in their own project folders.

Currently `server` for the express/socket.io server and `web-ui` for the webpack project that produces the web application interface.

Each project folder contains source code and build scripts to enable individual project development tasks.

Each project folder will have their own descriptors e.g. `package.json`, `pom.xml` etc.


## Building and Running the application

This application provides configuration files to run in docker containers. You will need docker engine and docker-compose installed to run the application locally.

Once your environment is ready. Use the following command to launch the application.

```
docker-compose up -d
```

Note that with the current configuration this will build and start two docker containers and link them together.

## Development

### Installing the dependencies

Go into each individual process and install dependencies if at any point you'd like to run them locally in your host machine.

E.g.

```
cd server && npm install && cd .. 
cd web-ui && npm install && cd .. 
```

### Running webpack dev server against local containers

Currently the web-ui project is to set up to use webpack-dev-server instead of nginx for local development purposes. 
Following command will start the webpack-dev-server for the web app. 

```
cd web-ui
npm run serve
```

Make sure you have the correct proxy config in your webpack.config.js to proxy api calls to express server.
Please refer to the readme files for the individual project to learn more about the detailed development workflows.

