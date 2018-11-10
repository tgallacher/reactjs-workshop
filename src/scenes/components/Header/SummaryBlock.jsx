import React from 'react';
import styled, { cx } from 'react-emotion';

const IconWrapper = styled('div')`
  max-width: 100px;
`;

/**
 * @see src/utils/status.js
 * @param {'available' | 'unavailable' | 'busy' } status
 */
const SummaryBlock = ({ status = 'available', stat = 0 }) => {
  const isUnavailable = status === 'unavailable';
  const isAvailable = status === 'available';
  const isBusy = status === 'busy';

  if (! isAvailable && ! isUnavailable && ! isBusy) {
    throw new Error('"status" should be one of: (available, unavailable, busy).');
  }

  return (
    <IconWrapper
      className={cx(
        'flex items-center',
        'text-center',
        {
          'text-orange-dark': isUnavailable,
          'text-purple-dark': isBusy,
          'text-green-dark': isAvailable,
        },
      )}
    >
      <div className="flex-1 m-1/2 text-5xl">
        {stat}
      </div>

      <div className="flex flex-col flex-1 m-1/2 text-xl">
        <div>
          <i
            className={cx({
              'fas fa-user-slash': isUnavailable,
              'far fa-user': isAvailable,
              'fas fa-user': isBusy,
            })}
          />
        </div>

        <div className="text-xs p-0 m-0">
          {status.charAt(0).toUpperCase() + status.substr(1).toLocaleLowerCase()}
        </div>
      </div>
    </IconWrapper>
  );
};

export default SummaryBlock;
