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
import { createStore } from 'redux';


// Exercise 09/01
// ===========

// Define our Action type constants
export const CONSULTANTS_FETCH_REQUEST = 'CONSULTANTS.FETCH.REQEST';
export const CONSULTANTS_FETCH_COMPLETE = 'CONSULTANTS.FETCH.COMPLETE';

// Define our Action Creators. These are used
// to signal that we want an update made to our store.
export const fetchConsultantData = () => ({
  type: CONSULTANTS_FETCH_REQUEST,
  payload: null,
  error: false,
  meta: null,
});

export const fetchConsultantComplete = data => ({
  type: CONSULTANTS_FETCH_COMPLETE,
  payload: { data },
  error: data instanceof Error,
  meta: null,
});

// Setup our reducer
export function reducer(prevState = [], action) {
  switch (action.type) {
    case CONSULTANTS_FETCH_COMPLETE:
      return [].concat(action.payload.data || []);

    default:
      return prevState;
  }
}

// Create our store
const store = createStore(reducer);

// Export the store to our test suite
export default store;
