# ReactJS Workshop

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?style=flat-square&logo=Github)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square)](https://github.com/tgallacher/reactjs-workshop/graphs/commit-activity)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/tgallacher/reactjs-workshop/blob/master/LICENSE)

A hands-on workshop to introduce and master [ReactJS](https://reactjs.org/).

We build an example single page application (SPA) to re-enforce key learnings and takeaways from this session.

**Table of Contents**

<!-- TOC depthFrom:2 depthTo:3 -->

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Exercises](#exercises)
- [License](#license)

<!-- /TOC -->

## Introduction

This repo forms part of a hands on workshop (link to [slide deck](https://tfg.pw/U2IfE)) designed to teach [ReactJS](https://reactjs.org) and its ecosystem. Throughout the workshop, we will learn by doing: We will build an example SPA, and will cover key concepts as we progress through the app build.

The workshop starts all the way from the beginner -- with little ReactJS knowledge -- to all the way on the other side of the spectrum, covering advanced ReactJS component patterns; css-in-js using EmotionJS; predictable state management with [Redux](https://redux.js.org/); and to handling asynchronous side effects via [Redux Sagas](https://redux-saga.js.org/).

While we won't have enough time to cover testing all of these concepts, the exercises are backed by a test suite which can be used as a reference for those wanting to dig a little deeper.

## Getting Started

You'll need to setup your local workspace so that you can either view and play around with the demo app, or if you want to do the exercises.

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

The sandbox app should now be accessible at [http://localhost:6006](http://localhost:6006). Any changes you make locally (i.e. to the exercises) will auto reload the app.

To `kill` the local sandbox, simply `Ctrl+C` in each terminal window to stop the active process.

## Exercises

> NOTE: When working on the solutions, **DO NOT** delete any of your work; each exercise builds on the previous solution and so you will need your solutions from prior exercises as you progress.

All exercises are located in the [./exercises](./exercises) folder, with an overview outlined in the [Exercise README](./exercises).

## License

This material is available for private, non commercial use under the [GPLv3.0 license](./LICENSE). If you would like to use this material to run your own workshop then please contact me.
