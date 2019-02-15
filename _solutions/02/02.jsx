/* eslint
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/destructuring-assignment: off,
*/
import React from 'react';

// Exercise 02/02
// ==============
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
          value={this.state.team}
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />

        <p>
          Team is: {this.state.team}
        </p>

        {/* Extra points */}
        {/* <div
          role="presentation"
          className="bg-purple-dark hover:bg-purple text-purple-lightest cursor-pointer font-bold inline-block mt-3 py-2 px-4"
          onClick={() => this.setState({ team: 'Go beavers!!!' })}
        >
          Update
        </div> */}
      </div>
    );
  }
}

export default App;
