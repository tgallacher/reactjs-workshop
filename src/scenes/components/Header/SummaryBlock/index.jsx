/* eslint
  react/require-default-props: off,
*/
import React from 'react';
import PropTypes from 'prop-types';

import { getClassNameVariants } from './utils';

import StatusContainer from './StatusContainer';
import StatusLabel from './StatusLabel';
import StatusIcon from './StatusIcon';
import Wrapper from './Wrapper';
import Stat from './Stat';

/**
 * @see src/utils/status.js
 * @param {'available' | 'unavailable' | 'busy' } status
 */
const SummaryBlock = ({ status = 'available', stat = 0 }) => {
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

SummaryBlock.propTypes = {
  status: PropTypes.oneOf([
    'unavailable',
    'available',
    'busy',
  ]),
  stat: PropTypes.number,
};

export default SummaryBlock;
