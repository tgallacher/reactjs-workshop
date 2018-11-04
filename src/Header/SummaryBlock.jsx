import React from 'react';
import styled, { cx } from 'react-emotion';

const IconWrapper = styled('div')`
  max-width: 100px;
`;

// Consulstant status: 'available' | 'busy' | 'unavailable'
const SummaryBlock = ({ status = 'available', stat = 0 }) => (
  <IconWrapper
    className={cx(
      'flex',
      'items-center',
      'text-center',
      {
        'text-green-dark': status === 'available',
        'text-orange-dark': status === 'unavailable',
        'text-purple-dark': status === 'busy',
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
              'far fa-user': status === 'available',
              'fas fa-user-slash': status === 'unavailable',
              'fas fa-user': status === 'busy',
            }
          )}
        />
      </div>
      <div id="text w-full">
        <span className="text-xs p-0 m-0">
          {status.charAt(0).toUpperCase() + status.substr(1)}
        </span>
      </div>
    </div>
  </IconWrapper>
);

export default SummaryBlock;
