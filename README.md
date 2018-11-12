# ReactJS Workshop
ReactJS Training

**Table of Contents**
<!-- TOC depthFrom:2 -->

- [Getting Started](#getting-started)
  - [With Docker](#with-docker)
  - [With NPM](#with-npm)
- [Exercises](#exercises)

<!-- /TOC -->

## Getting Started
You'll need to setup your local workspace so that you can either view and play around with the demo app, or if you want to do the exercises.

Depending on what you have installed, you can setup your machine using either `Docker` or `npm`. Both produce the same output, so it's up to you.

Regardless of the option you choose, when the sandbox environment is ready, you can access the sandbox at [http://localhost:6006](http://localhost:6006).

### With Docker
Setup required dependencies:

```sh
docker-compose run setup
```

Run the local sandbox app:
> The sandbox app is used for both reviewing and editing the demo app, as well as doing the exercies.

```sh
docker-compose up -d app
```

You should be good to go!

To `kill` the local sandbox, simply run:

```sh
docker-compose down
```

### With NPM
Setup required dependencies:

```sh
npm install
```

(or the *shorthand*) `npm i`.

Run the local sandbox app:
> The sandbox app is used for both reviewing and editing the demo app, as well as doing the exercies.

> **Note:** Each of these will consume a terminal window, so you will need more than 1 terminal window!

```sh
npm run server:dev
```

and,

```sh
npm run storybook:dev
```

To `kill` the local sandbox, simply `Ctrl+C` in each terminal window to stop the processes.


## Exercises

All exercises are located in the [./exercises](./exercises) folder, and summaries in the [Exerciese README](./exercises) file.
