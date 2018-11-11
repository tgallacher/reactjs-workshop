/* eslint
  react/require-default-props: off,
  no-nested-ternary: off,
*/
import React from 'react';
import PropTypes from 'prop-types';

import { sortArrayAlphabetically } from 'utils/misc';

import LiveTimeDifference from './LiveTimeDifference';
import DataRowColumn from './DataRowColumn';
import StatusColumn from './StatusColumn';
import Wrapper from './Wrapper';

const DataTableRow = ({
  statusSince = ((new Date()).getTime() / 1000), // default to 'now'
  isHeading = false,
  className,
  functions = [],
  sources = [],
  status,
  name,
  team,
}) => (
  <Wrapper
    className={className}
    isHeading={isHeading}
    status={status}
  >
    <DataRowColumn>{name || 'Name is undefined'}</DataRowColumn>
    <DataRowColumn>{team || 'Team is undefined'}</DataRowColumn>
    <DataRowColumn>
      {Array.isArray(functions)
        ? functions.length > 0
          ? sortArrayAlphabetically(functions).join(', ')
          : '-'
        : functions
      }
    </DataRowColumn>

    <DataRowColumn>
      {Array.isArray(sources)
        ? sources.length > 0
          ? sortArrayAlphabetically(sources).join(', ')
          : '-'
        : sources
      }
    </DataRowColumn>

    <StatusColumn>
      {! isHeading
        ? (
          <React.Fragment>
            <div>{status || 'Unkown'}</div>

            <div className="italic">
              <LiveTimeDifference sinceTimestamp={statusSince} />
            </div>
          </React.Fragment>
        )
        : status
      }
    </StatusColumn>
  </Wrapper>
);

DataTableRow.propTypes = {
  statusSince: PropTypes.number,
  className: PropTypes.string,
  isHeading: PropTypes.bool,
  functions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  sources: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  status: PropTypes.string,
  name: PropTypes.string,
  team: PropTypes.string,
};

export default DataTableRow;
