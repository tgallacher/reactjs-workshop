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
export class App extends React.Component {
  render() {
    const { mouse } = this.props;

    return (
      <div>
        {mouse && (
          <h1>
            The mouse position is ({mouse.x}, {mouse.y})
          </h1>
        )}
      </div>
    );
  }
}

// Add runtime prop validation
App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
};

// Define our HOC
function withMouse(Component) {
  return class extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      });
    };

    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
  };
}

export default withMouse(App);
