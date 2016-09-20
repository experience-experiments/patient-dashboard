# Patient Dashboard Server

Server application pushing realtime patient vital measurement updates to clients.

## Environment

Ensure you have the following tools installed

- Git along with access to project repository.
- NodeJS 6.2.x with NPM 3.8.x
- Cloud Foundry CLI

## Toolkit

- [Express](http://expressjs.com/)
- [Socket.IO](http://socket.io/)
- [Eslint](http://eslint.org/) We use `eslint-plugin-import` and `eslint-config-airbnb-base` for the default rule-set. Please check `.eslintrc` to see project specific rule overrides.

## Development Process

`npm start` to start the server.

## Local PCF Deployment

Currently the project contains a cloudfoundry manifest (`manifest.yml`) in order to be deployed to a cloudfoundry environment. Below is an example of deploying the app using [pcf-dev](https://docs.pivotal.io/pcf-dev/index.html).

To start the pivotal cloud foundry VM: `cf dev start`

To login using `cf` command line api.
```
  $ cf login -a https://api.local.pcfdev.io --skip-ssl-validation
    Email: user
    Password: pass
```
To upload the application `cf push patient-dashboard-server`.

## AWS Deployment

Check the root repository readme for AWS deployment.
