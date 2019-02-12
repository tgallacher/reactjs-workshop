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
import PropTypes from 'prop-types';

import List from './components/01-ListComponent';

// Exercise 08/01
// ===========
//
// React's context API is a powerful tool in our bag of tricks for abstracting and sharing state across our components.
// The context API also provides a streamlined mechanism for sharing this state across a deep DOM tree, without redundant
// prop/concern "leaks". Although, caution should be taken -- as discussed during the presentation -- while powerful,
// the context API can limit the composability of components, and so other options should be weighed first in order to choose
// the right tool of the job.
//
// In this example, we will take a look at a slight deviation from the demo app, where we will render a list of team names,
// with one of the items in the list being considered and highlighted as the "active" item. The styling of this item will
// differ from the rest. We also include functionality so that we can change which item is active by clicking on the desired
// item. Here, we will explore how the context API can significantly simplify our component architecture.
//
// NOTES
// =====
// Here some components have been artifically split (see the `./components` folder) in order to highlight the power offered by the Context API.
//
// Tasks
// --------
// ✅    You should refactor the below components (some are in a different folder) to use React's Context API.
// ✅    The context API should pass both the `activeIndex` value (type: number), and a `handleUpdateIndex`
//        function which can be used to update the active index on a click event. The functions prototype should be:
//        (newActiveIndex: number) => void
// ✅    Your context provider should default the `activeIndex` to 0.
// ✅    Your context provider should default the `handleUpdateIndex` to an empty function, that when called does nothing.
// ✅    You should assign the context to the variable `ActiveContext` below (so the tests work)
// ✅    The `List` component should only accept 1 prop, the `values` prop, which contains the team names (type: string[])
// ✅    The `ListItem` component should accept 2 props, the `value` prop and the `index` prop
//        The `value` prop is the team name that the ListItem should render; its type is: string
//        The `index` prop is the location in the list of this ListItem; its type is: number.
//        All other required information should be obtained from the context API.
//
// Tips
// ------
// 🐨   Use the `React.createContext` method to create your context components
// 🐨   You should ensure you export / import all the components you need across all file/component modules!
// 🐨   Don't forget to update each component's `propTypes` definition as you modify the props they support/require!

export const ActiveContext = {};

class App extends React.Component {
  static propTypes = {
    teamNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  state = {
    activeIndex: 1,
  };

  handleClick = (e) => {
    this.setState({
      activeIndex: parseInt(e.target.dataset.index, 10) || 0,
    });
  }

  render() {
    return (
      <div>
        <h2>Team names</h2>

        <p>Select a team to make it active.</p>

        <List
          handleClick={this.handleClick}
          activeItem={this.state.activeIndex}
          values={this.props.teamNames}
        />
      </div>
    );
  }
}

export default App;
