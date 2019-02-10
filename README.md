# ReactJS Workshop
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?style=flat-square&logo=Github)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square)](https://github.com/tgallacher/reactjs-workshop/graphs/commit-activity)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/tgallacher/reactjs-workshop/blob/master/LICENSE)


A 3 day hands-on workshop, learning ReactJS and Redux by building an example single page application (SPA).

**Table of Contents**
<!-- TOC depthFrom:2 depthTo:3 -->

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [With Docker](#with-docker)
  - [Without Docker](#without-docker)
- [Exercises](#exercises)
- [License](#license)

<!-- /TOC -->

## Introduction
This repo forms part of a hands on workshop (TODO: link to slides) designed to teach [ReactJS](https://reactjs.org) and its ecosystem. Throughout the 3-day workshop, we will learn by doing: We will build a fake SPA, and will cover key concepts as we progress through the app build.

The workshop starts all the way from the beginner -- with little ReactJS knowledge -- to all the way on the other side of the spectrum, covering advanced ReactJS component patterns; css-in-js using EmotionJS; predictable state management with [Redux](https://redux.js.org/); and to handling asynchronous side effects via [Redux Sagas](https://redux-saga.js.org/).

While we won't have enough time to cover testing all of these concepts, the exercises are backed by a test suite which can be used as a reference for those wanting to dig a little deeper.


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

### Without Docker
Docker isn't required to run the sandbox app locally.

<details>
<summary>Using npm</summary>

#### Install dependencies
```sh
npm install # or just, npm i
```

#### Run the local sandbox app:
The sandbox app is used for both reviewing and editing the demo app, as well as doing the exercies.

> **Note:** Each of these will consume a terminal window, so you will need more than 1 terminal window!

```sh
npm run server
```

and in a separate terminal,

```sh
npm start
```

To `kill` the local sandbox, simply `Ctrl+C` in each terminal window to stop the active process.
</details>

<details>
<summary>Using yarn</summary>

**Note**: At present, this repo uses `npm` as the package manager, and so if you plan on using `yarn`, you might have to remove the `package-lock.json` file, as this typically throws a warning from yarn (and vice-versa). For now, please don't try to commit a `yarn.lock` file back to this repo.

#### Install dependencies
```sh
yarn install # or just, yarn
```

#### Run the local sandbox app:
The sandbox app is used for both reviewing and editing the demo app, as well as doing the exercies.

> **Note:** Each of these will consume a terminal window, so you will need more than 1 terminal window!

```sh
yarn server
```

and in a separate terminal,

```sh
yarn start
```

To `kill` the local sandbox, simply `Ctrl+C` in each terminal window to stop the active process.
</details>

## Exercises

All exercises are located in the [./exercises](./exercises) folder, and summaries in the [Exerciese README](./exercises) file.

## License
This material is available for private, non commercial use under the [GPL version 3.0 license](./LICENSE). If you would like to use this material to run your own workshop then please contact me.
