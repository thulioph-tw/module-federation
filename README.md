# Module Federation

> A simple proof of concept to understand how module federation works!

## Required

We're using the power of yarn workspaces in this demo, so you must install it.

- [Yarn](https://yarnpkg.com/)

## Commands

There are a few commands available to test this application locally, please make sure you're running them under the **root path**.

### install

Run the command below to install all dependencies.

```sh
$ yarn
```

### dev

Run the command below to start both applications in development mode.

```sh
$ yarn dev
```

- under http://localhost:3001/ we have app-a
- under http://localhost:3002/ we have app-b


## Steps

Below, you can follow each step in order to reproduce the same thing on your side.

### First

We need to create a shared structure to orchestrate all apps.

- Define the main `package.json` file and its own dependencies
- Create apps folder to be used as **yarn workspaces**
  - Each folder must contain its own `package.json` file and dependencies
  - Both apps are sharing almost the same `package.json` configuration
- Run `yarn` in the root in order to install everything

### Second

We need to define how each application should be and the base `webpack.config.js` file.

- Create a `/public` path under each app directory
  - Adds a `index.html` file for each one
  - Expose a div with `#root` as an ID
- Create a `/src` path under each app directory
  - Adds a `index.js` file for each one
  - Adds a `app.jsx` file for each one
  - Adds a `bootstrap.jsx` file for each one
- Create the `webpack.config.js` file for each application

### Third

We need to make both applications **federated container** and **federated consumer** using `ModuleFederationPlugin`.

- Updates `webpack.config` file for each app
  - Expose an `output.publicPath` pointing to app route
  - Adds `ModuleFederationPlugin` configuration for each one
- Updates `index.html` file for each app
  - Adds the `remoteEntry` for each app
- Updates each `app.jsx` file by importing the component from the other app

