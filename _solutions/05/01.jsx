/* eslint
  react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  max-len: off,
*/
import React from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled, { css, cx } from 'react-emotion'; // REMOVE the imports which you don't use

import DataTableHeading from 'scenes/components/DataTable/DataTableHeading';
import DataRow from '../03/02';

// Exercise 05/01
// ===========
const statusAvailableCss = css`
  background-color: ${rgba('#008744', 0.15)};
  border-color: #008744;
`;

const statusUnavailableCss = css`
  background-color: ${rgba('#D75400', 0.15)};
  border-color: #D75400;
`;

const statusBusyCss = css`
  background-color: ${rgba('#90479B', 0.15)};
  border-color: #90479B;
`;

class StyledDataTable extends React.Component {
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
          <div
            key={`${row.name}-${idx}`}
            className={cx(
              'border-solid border-b-2',
              'flex items-center',
              'w-full h-10 px-2',
              'font-sans font-light text-sm text-grey-darker',
              'border-l-4 mb-1',
              {
                [statusUnavailableCss]: row.status === 'unavailable',
                [statusAvailableCss]: row.status === 'available',
                [statusBusyCss]: row.status === 'busy',
              },
            )}
          >
            <DataRow {...row} />
          </div>
        ))}
      </div>
    );
  }
}


// Add runtime prop validation
StyledDataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    functions: PropTypes.arrayOf(PropTypes.string),
    sources: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    team: PropTypes.string,
    name: PropTypes.string,
  })),
};

export default StyledDataTable;
