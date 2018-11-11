/* eslint react/destructuring-assignment: off, react/jsx-one-expression-per-line: off */
import React from 'react';

// Exercise 02-01
// ===========
//
// The focus on this exercise is to set and get data from within
// a stateful component.
//
// We are going to focus more on component usage, but pulling in
// components used in the demo app. We'll attempt to reconstruct
// the status summar icon blocks, which display a statistic alongside
// the consultant status.
//
// Tasks
// --------
// ✅    Your component should not accept any props
// ✅    Your component should initialise a 'state' object
// ✅    Your component's state object should contain a 'team' node
// ✅    Your component's state object should initialise the 'team' node to an empty string
// ✅    Your component should render an input DOM element to accept text input from the user
// ✅    Your component should update the 'state.team' with the text provided by the user
// ✅    Your component should render the team name from state, as it is updated
//
//
// Tips
// ------
// 🐨  Add the ALL of the following class names to your <input /> component to make it obvious on the screen:
//      "appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
// 🐨  You'll need to "listen" for changes, based on the user's input. Think about which DOM API you could use,
//      and where you can put this in your component.
// 🐨  Remember that native DOM attributes are camelCased!
// 🐨  You can initialise state and class properties using any of the valid syntax options; this project is setup
//     to support "all" of the currently popular appraoches.
class App extends React.Component {
  render() {
    return (
      <div>
        Start HERE!
      </div>
    );
  }
}

export default App;
