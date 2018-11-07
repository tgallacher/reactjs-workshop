import React from 'react';
import styled, { cx } from 'react-emotion';

const IconWrapper = styled('div')`
  max-width: 100px;
`;

// Status: @see src/utils/status.js
// @param {'available' | 'unavailable' | 'busy' } status
const SummaryBlock = ({ status = 'available', stat = 0 }) => {
  const isAvailable = status === 'available';
  const isUnavailable = status === 'unavailable';
  const isBusy = status === 'busy';

  if (! isAvailable && ! isUnavailable && ! isBusy) {
    throw new Error('"status" should be one of: (available, unavailable, busy).');
  }

  return (
    <IconWrapper
      className={cx(
        'flex',
        'items-center',
        'text-center',
        {
          'text-green-dark': isAvailable,
          'text-orange-dark': isUnavailable,
          'text-purple-dark': isBusy,
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
                'far fa-user': isAvailable,
                'fas fa-user-slash': isUnavailable,
                'fas fa-user': isBusy,
              }
            )}
          />
        </div>
        <div id="text w-full">
          <span className="text-xs p-0 m-0">
            {status.charAt(0).toUpperCase() + status.substr(1).toLocaleLowerCase()}
          </span>
        </div>
      </div>
    </IconWrapper>
  );
};

export default SummaryBlock;
