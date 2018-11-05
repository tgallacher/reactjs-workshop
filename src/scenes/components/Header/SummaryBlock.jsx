import React from 'react';
import styled, { cx } from 'react-emotion';

import {
  isStatusUnavailable,
  isStatusAvailable,
  isStatusBusy,
} from '../utils/status';

const IconWrapper = styled('div')`
  max-width: 100px;
`;

// Status: @see src/utils/status.js
const SummaryBlock = ({ status = 'Ready', stat = 0 }) => (
  <IconWrapper
    className={cx(
      'flex',
      'items-center',
      'text-center',
      {
        'text-green-dark': isStatusAvailable(status),
        'text-orange-dark': isStatusUnavailable(status),
        'text-purple-dark': isStatusBusy(status),
      }
    )}
  >
    <div id="number" className="flex-1 m-1/2">
      <span className="text-5xl">
        {stat}
      </span>
    </div>
    <div id="icons-wrapper" className="flex flex-col flex-1 m-1/2">
      <div id="icon w-full">
        <i
          className={cx(
            'text-xl',
            'p-0',
            'm-0',
            {
              'far fa-user': isStatusAvailable(status),
              'fas fa-user-slash': isStatusUnavailable(status),
              'fas fa-user': isStatusBusy(status),
            }
          )}
        />
      </div>
      <div id="text w-full">
        <span className="text-xs p-0 m-0">
          {isStatusBusy(status)
            ? 'Busy'
            : isStatusUnavailable(status)
              ? 'Unavailable'
              : status.charAt(0).toUpperCase() + status.substr(1).toLocaleLowerCase()
          }
        </span>
      </div>
    </div>
  </IconWrapper>
);

export default SummaryBlock;
