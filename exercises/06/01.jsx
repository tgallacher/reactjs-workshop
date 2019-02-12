/* eslint
  react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  react/no-multi-comp: off,
  max-len: off,
*/
import React from 'react';
import PropTypes from 'prop-types';


// Exercise 06/01
// ===========
//
// We will take a short diversion here and explore "HOCs", or Higher-Order-Components.
// While the demo app doesn't define any HOCs directly, HOCs have been one of the foundations of advanced
// concepts in ReactJS, and can help abstract cross-cutting concerns across several components.
// They also showcase one of ReactJS' powerhouse features: composability.
//
// As we mentioned above, while we won't define any inside the demo app, we will be using one -- arguably the most
// popular -- heavily when we explore Redux.
//
// GOAL
// Once completed, we will be able to display the current mouse position on the screen; and have it update in real time.
//
// Tasks
// --------
// ✅    You should define a `withMouse` HOC that injects the current mouse X and Y coordinates
// ✅    Your `withMouse` HOC should update the current coordinates in real time, as the user moves their mouse
// ✅    Your component should accept a `mouse` prop, which is an object containing the `x` and `y` nodes and correspond to
//        the current mouse (x,y) positions, respectively.
// ✅    Your component should render the current X, Y position by pulling the information from the `mouse` prop
//        The format should be: (x,y) including the parentheses.
//
// 🚫   Styling is out of scope
// 🚫   You are free to add additional text, markup, but we will only be looking for the current X, Y position of the mouse
//
// Tips
// ------
// 🐨  Use the `onMouseMove` Synthetic DOM event to capture the current X and Y coords of the mouse
// 🐨  Remember, you HOC `props` are READ-ONLY, so you'll have to store the updates somewhere else to trigger a re-render
//
// 👩‍💻  Credit: Based on https://github.com/ReactTraining/react-workshop/
export class App extends React.Component {
  render() {
    return (
      <div className="">
        Start HERE!
      </div>
    );
  }
}

// Add prop validation
App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
};

// Define our HOC
function withMouse() {
  return (
    <div>
      Start HERE (HOC)!
    </div>
  );
}

export default App;
