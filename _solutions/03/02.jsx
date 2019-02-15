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

// Exercise 03/02
// ===========
class Row extends React.Component {
  render() {
    const {
      functions,
      sources,
      status,
      team,
      name,
    } = this.props;

    return (
      <div className="w-full flex">
        <DataColumn id="name">{name || 'Unknown Consultant'}</DataColumn>
        <DataColumn id="team">{team || 'Unknown Team'}</DataColumn>
        <DataColumn id="functions">
          {Array.isArray(functions) && functions.length > 0
            ? functions.join(', ')
            : '-'
          }
        </DataColumn>
        <DataColumn id="sources">
          {Array.isArray(sources) && sources.length > 0
            ? sources.join(', ')
            : '-'
          }
        </DataColumn>
        <DataColumn id="status">{status || 'Unknown Status'}</DataColumn>
      </div>
    );
  }
}

// Add runtime prop validation
Row.propTypes = {
  functions: PropTypes.arrayOf(PropTypes.string),
  sources: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string,
  team: PropTypes.string,
  name: PropTypes.string,
};

export default Row;
