import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from 'consultants/sagas';
import rootReducer from './reducer';

let composeEnhancers = compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware,
];

if (! ISPRODUCTION) {
  composeEnhancers = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window
    // eslint-disable-next-line
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
}

const enhancers = applyMiddleware(
  ...middleware,
);

const store = createStore(
  rootReducer,
  composeEnhancers(enhancers),
);

// Kick-start Saga middleware
sagaMiddleware.run(rootSaga);

// Enable Webpack hot module replacement for reducers
// if (module.hot) {
//   module.hot.accept('./reducer', () => {
//     const nextReducer = require('./reducer');

//     store.replaceReducer(nextReducer);
//   });
// }

export default store;
