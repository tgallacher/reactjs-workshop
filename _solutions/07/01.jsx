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


// Exercise 07/01
// ===========
export class MousePosition extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    const {
      children = () => {},
    } = this.props;

    return (
      <div onMouseMove={this.handleMouseMove}>
        {children(this.state)}
      </div>
    );
  }
}

// Define display name so we can select in our tests
MousePosition.displayName = 'MousePosition';

// Add runtime prop validation
MousePosition.propTypes = {
  children: PropTypes.func,
};

class App extends React.Component {
  render() {
    return (
      <MousePosition>
        {mouse => (
          <h1>
            The mouse position is ({mouse.x}, {mouse.y})
          </h1>
        )}
      </MousePosition>
    );
  }
}

// Add runtime prop validation
App.propTypes = {};

export default App;
