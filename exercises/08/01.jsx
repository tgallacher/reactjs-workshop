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

import List from './components/01-ListComponent';

// Exercise 08/01
// ===========
//
// Tasks
// --------
// ✅    You should complete the `MousePosition` component so that it supports the render prop pattern
//
// Tips
// ------
// 🐨
class App extends React.Component {
  static propTypes = {
    teamNames: PropTypes.string.isRequired,
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

        <p>Select an item to make it active.</p>

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
