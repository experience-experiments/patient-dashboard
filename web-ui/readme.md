# Patient Dashboard

## Background

This project demonstrates a dynamic patient dashboard.

## Environment

Once you are ready to get into the code, check your environment to make sure your environment has all the necessary tools installed.

  - Git (possibly with sourcetree)
  - Bitbucket account with access to this repository
  - NodeJS 6.x with NPM 3.x
  - Cloud Foundry CLI

## Toolkit

### A. Build & Deploy

- [Webpack](https://webpack.github.io/) for live development and build optimisation
- [Pivotal Cloud Foundry - PCF Dev](https://docs.pivotal.io/pcf-dev/index.html) for targeting cloud deployment.

## Development Process

Following commands are available in package.json to help you with your development tasks.

  * `npm run serve` - to develop in hot-reload mode
  * `npm run lint` - to run eslint
  * `npm test` - to run unit tests locally
  * `npm test watch` - to run unit tests in watch mode
  * `npm run build` - to build the app

## Local PCF Deployment

Currently the project contains a cloudfoundry manifest (`manifest.yml`) in order to be deployed to a cloudfoundry environment. Below is an example of deploying the app using [pcf-dev](https://docs.pivotal.io/pcf-dev/index.html).

To start the pivotal cloud foundry VM: `cf dev start`

To login using `cf` command line api.
```
  $ cf login -a https://api.local.pcfdev.io --skip-ssl-validation
    Email: user
    Password: pass
```
To upload the prebuilt application `cf push patient-dashboard-ui`. Note that this requires `npm run build` task to be completed.

## AWS Deployment

Check the root repository readme for AWS deployment.
