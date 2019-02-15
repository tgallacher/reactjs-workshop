/* eslint
  react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  react/no-unused-state: off,
  react/no-multi-comp: off,
  react/sort-comp: off,
  max-len: off,
*/
import React from 'react';
import { Provider } from 'react-redux';

import store from '../09/01';
import App from './components/01-App';

// Exercise 10/01
// ===========
function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWrapper;
