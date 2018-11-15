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
import { connect } from 'react-redux';

import DataTable from '../../04/01';

function App(props) {
  return (
    <div>
      Start HERE!
    </div>
  );
}

App.propTypes = {
  consultantData: PropTypes.arrayOf(PropTypes.shape({
    functions: PropTypes.arrayOf(PropTypes.string),
    sources: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    team: PropTypes.string,
    name: PropTypes.string,
  })),
};

export const mapStateToProps = null;

export default App;

