import React from 'react';

import { getClassNameVariants } from './utils';

import StatusContainer from './StatusContainer';
import StatusLabel from './StatusLabel';
import StatusIcon from './StatusIcon';
import Wrapper from './Wrapper';
import Stat from './Stat';

const VALID_STATUSES = [
  'unavailable',
  'available',
  'busy',
];

/**
 * @see src/utils/status.js
 * @param {'available' | 'unavailable' | 'busy' } status
 */
const SummaryBlock = ({ status = 'available', stat = 0 }) => {
  if (! VALID_STATUSES.includes(status)) {
    throw new Error('"status" should be one of: (available, unavailable, busy).');
  }

  const classNames = getClassNameVariants(status);

  return (
    <Wrapper colorClassName={classNames.color}>
      <Stat>{stat}</Stat>

      <StatusContainer>
        <StatusIcon iconClassName={classNames.icon} />
        <StatusLabel label={status} />
      </StatusContainer>
    </Wrapper>
  );
};

export default SummaryBlock;
