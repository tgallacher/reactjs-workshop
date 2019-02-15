/* eslint
  react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  max-len: off,
*/
import React from 'react';
import PropTypes from 'prop-types';

import DataTableHeading from 'scenes/components/DataTable/DataTableHeading';
import DataRow from '../03/02';

// Exercise 04/01
// ===========
class DataTable extends React.Component {
  render() {
    const { data = [] } = this.props;

    return (
      <div className="w-full">
        <DataTableHeading />

        {data.length === 0
          && (
            <div>No data to display</div>
          )}

        {data.length > 0 && data.map((row, idx) => (
          <DataRow
            {...row}
            key={row.name || idx.toString()}
          />
        ))}
      </div>
    );
  }
}

// Add runtime prop validation
DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    functions: PropTypes.arrayOf(PropTypes.string),
    sources: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    team: PropTypes.string,
    name: PropTypes.string,
  })),
};

export default DataTable;
