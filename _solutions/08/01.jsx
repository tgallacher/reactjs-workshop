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
export const ActiveContext = React.createContext({
  handleUpdateIndex: () => {},
  activeIndex: 0,
});

class App extends React.Component {
  static propTypes = {
    teamNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  handleClick = (index) => {
    this.setState({
      activeIndex: index || 0,
    });
  }

  state = {
    handleUpdateIndex: this.handleClick,
    activeIndex: 1,
  };

  render() {
    return (
      <ActiveContext.Provider value={this.state}>
        <div>
          <h2>Team names</h2>

          <p>Select an item to make it active.</p>

          <List values={this.props.teamNames} />
        </div>
      </ActiveContext.Provider>
    );
  }
}

export default App;
