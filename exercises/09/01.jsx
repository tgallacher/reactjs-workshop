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
//
// Tasks
// --------
// ✅    Create an Action creator for indicating that we would like to make a request for data.
//        This should be assigned to the `fetchConsultantData` stub below.
//        This should have the type: CONSULTANTS_FETCH_REQUEST (already defined below).
//        This action creator will not accept any input args; the `payload` key should be null.
// ✅    Create an Action creator for indicating that we would like to provide data received from a network request.
//        This should be assigned to the `fetchConsultantComplete` stub below.
//        This should have the type: CONSULTANTS_FETCH_COMPLETE (already defined below).
//        This action creator should accept a single input arg, which will be an array of consultant data.
//        This input arg should be stored within the action at `payload.data`.
//
// ✅    All actions should default their unused object keys to null, if they don't have any data.
// ✅    You All actions should adhere to the FSA object structure.
//
// ✅    Complete the `reducer` using the stub below.
// ✅    Your reducer should return the default store state when `prevState` is undefined.
// ✅    Your default store state should be an empty array.
// ✅    The reducer should return the payload data to the store when the `fetchConsultantComplete` action is dispatched
// ✅    The reducer should return the previous state if any other action is dispatched
//
// ✅    Create a single store for our 'app' using the `createStore` method (already imported above)
// ✅    The store should be created without a `preloaded state` (only call with 1 arg)
// ✅    The store should be configured to use our reducer we created in the above tasks.
//
// Tips
// --------
//

// Define our Action type constants
export const CONSULTANTS_FETCH_REQUEST = 'CONSULTANTS.FETCH.REQEST';
export const CONSULTANTS_FETCH_COMPLETE = 'CONSULTANTS.FETCH.COMPLETE';

// Define our Action Creators. These are used
// to signal that we want an update made to our store.
export const fetchConsultantData = null;
export const fetchConsultantComplete = null;

// Setup our reducer
export const reducer = function(prevState, action) {

};

// Create our store
const store = null;

// Export the store to our test suite
export default store;
