import React from 'react';
import styled, { css, cx } from 'react-emotion';
import { rgba } from 'polished';

import {
  isStatusUnavailable,
  isStatusAvailable,
  isStatusBusy,
} from '../utils/status';
import { sortArrayAlphabetically } from '../utils/misc';
import LiveTimeDifference from './LiveTimeDifference';

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

const Wrapper = styled('div')``;
const TeamCol = styled('div')``;
const ConsultantNameCol = styled('div')``;
const StatusCol = styled('div')``;
const FunctionsCol = styled('div')``;
const SourcesCol = styled('div')``;

export const DataTableRow = ({
  status_since = ((new Date()).getTime() / 1000), // default to 'now'
  isHeading = false,
  functions = [],
  sources = [],
  status,
  name,
  team,
}) => (
  <Wrapper
    className={cx(
      'border-solid border-b-2',
      'flex items-center',
      'w-full h-10 px-2',
      'font-sans font-light text-sm text-grey-darker',
      {
        'border-grey-lighter font-bold text-grey-darkest text-normal': isHeading,
        'border-l-4 mb-1': ! isHeading,
        [statusUnavailableCss]: ! isHeading && isStatusUnavailable(status),
        [statusAvailableCss]: ! isHeading && isStatusAvailable(status),
        [statusBusyCss]: ! isHeading && isStatusBusy(status),
      }
    )}
  >
    <ConsultantNameCol className="flex-1">
      {name || 'Name is undefined'}
    </ConsultantNameCol>

    <TeamCol className="flex-1">
      {team || 'Team is undefined'}
    </TeamCol>

    <FunctionsCol className="flex-1">
      {Array.isArray(functions)
        ? functions.length > 0
          ? sortArrayAlphabetically(functions).join(', ')
          : 'No functions'
        : functions
      }
    </FunctionsCol>

    <SourcesCol className="flex-1">
      {Array.isArray(sources)
        ? sources.length > 0
          ? sortArrayAlphabetically(sources).join(', ')
          : 'No sources'
        : sources
      }
    </SourcesCol>

    <StatusCol className="flex justify-between flex-1">
      {! isHeading
        ? (
          <React.Fragment>
            <div>{status || 'Unkown'}</div>

            <div className="italic">
              <LiveTimeDifference sinceTimestamp={status_since} />
            </div>
          </React.Fragment>
        )
        : status
      }
    </StatusCol>
  </Wrapper>
);

export default DataTableRow;
