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
//
// ::NOTE::
// --------
//
//  You will need to have completed the following Exercises successfully before being able to complete this one:
//    * Exercise 09/01
//    * Exercise 04/01
//    * Exercise 03/02
//
// Tasks
// --------
// ✅    Complete the `AppWrapper` component below.
// ✅    The `AppWrapper` component should only setup Redux for use with your `App` component (imported above).
// ✅    You should use the Redux store that we built in Exercise 09/01 -- already imported above.
//
// ✅    You Should complete the `App` component (see separate file in this dir).
// ✅    Your `App` component can include whatever you like, but must at least include the `DataTable` component we built during Exercise 03/02 and Exercise 04/01.
//        This has already been imported into the module scope for you (see the `./components/01-App.jsx` file).
// ✅    Your `App` component should accept 1 prop, called `consultantData`. The shape of this data can be seen in the `PropTypes` defintion at the bottom of the file.
//        The shape is the same as used in Exercise 03/02 and Exercise 04/01.
// ✅    Your `App` component should pass this data into our `DataTable` component.
// ✅    You should "connect" your `App` component to the Redux store. The required redux API has already been imported for you; you just need to use it.
// ✅    You will need to tell Redux how to transform the data in the store into the prop required by your `App` component
//
//
// ⭐️    TODO
//
// Tips
// --------
// 🐨     This exercise is split across more than 1 file
// 🐨     From Exercise 03/02, our `DataTable` component requires input data from a prop named `data`.
// 🐨     You don't have to worry about where the data is coming from; this will be handled for you behind the scenes.
//          The focus here is on wiring up our `App` component to our Redux store.
// 🐨     Remember, we can instruct Redux how to convert data in our store to component props using a `mapStateToProps` selector.
function AppWrapper() {
  return (
    <div>
      Start HERE!
    </div>
  );
}

export default AppWrapper;
