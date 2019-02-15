/*
  eslint react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  max-len: off,
*/
import React from 'react';
import PropTypes from 'prop-types';

import DataColumn from 'scenes/components/DataTable/DataTableRow/DataRowColumn';

// Exercise 03/01
// ===========
class Row extends React.Component {
  render() {
    const { team, functions } = this.props;

    if (! team && ! functions) {
      return null;
    }

    return (
      <div className="flex w-1/4">
        <DataColumn id="team">{team || 'Unknown Team'}</DataColumn>
        <DataColumn id="functions">
          {Array.isArray(functions) && functions.length > 0
            ? functions.join(', ')
            : '-'
          }
        </DataColumn>
      </div>
    );
  }
}

// Add runtime prop validation
Row.propTypes = {
  team: PropTypes.string,
  functions: PropTypes.arrayOf(PropTypes.string),
};

export default Row;
