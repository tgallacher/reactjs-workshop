/* eslint
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/destructuring-assignment: off,
  max-len: off,
*/
import React from 'react';
import PropTypes from 'prop-types';

// Exercise 02/03
// ===========
//
// Component lifecycle methods. Using a stateful component, how can we
// leverage the component lifecycle to control behaviour?
//
// We're going to create a simplified version of the `LiveTimerDifference`
// component where we use component lifecycle methods to create a live timer
// display.
//
//
// Tasks
// --------
// ✅    Your component should accept an OPTIONAL prop, 'datetimestamp' whose value is a Unix timestamp.
// ✅    Your component should initialise a 'state' object
// ✅    Your component's state object should contain a 'timestamp' node
// ✅    Your component's state object should initialise the 'timestamp' node to either
//        the `datetimestamp` prop, or a `now` data object.
// ✅    Your component should re-render the time display after every second
//
// Tips
// ------
// 🐨  Use JS `Date` [1] object for accessing current time, e.g. `new Date()`.
// 🐨  Use the JS Date object's `.toLocaleTimeString()` function for displaying a human-readable timestamp inside your `render()` method
// 🐨  Don't forget to clear your intervals!!! (e.g. `clearInterval(id)`)
// 🐨  You can initialise state and class properties using any of the valid syntax options; this project is setup
//     to support "all" of the currently popular appraoches.
//
// [1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
class Timer extends React.Component {
  render() {
    return (
      <div>
        Start HERE!
      </div>
    );
  }
}

// Add prop validation
Timer.propTypes = {
  datetimestamp: PropTypes.number,
};

export default Timer;
