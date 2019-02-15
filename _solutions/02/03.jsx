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
class Timer extends React.Component {
  state = {
    timestamp: this.props.datetimestamp
      ? new Date(this.props.datetimestamp)
      : new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        timestamp: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        Time: {this.state.timestamp.toLocaleTimeString()}
      </div>
    );
  }
}

// Add runtime prop validation
Timer.propTypes = {
  datetimestamp: PropTypes.number,
};

export default Timer;
