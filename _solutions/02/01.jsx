/* eslint
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/destructuring-assignment: off,
  max-len: off,
*/
import React from 'react';

// Exercise 02/01
// ===========
class App extends React.Component {
  state = { team: '' };

  handleChange = (e) => {
    this.setState({
      team: typeof e.target.value === 'string'
        ? e.target.value
        : '',
    });
  }

  render() {
    return (
      <div className="w-1/4">
        <input
          type="text"
          onChange={this.handleChange}
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />

        Team is: {this.state.team}
      </div>
    );
  }
}

export default App;
