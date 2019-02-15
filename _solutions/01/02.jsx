/* eslint react/destructuring-assignment: off */
import React from 'react';
import PropTypes from 'prop-types';

import { getClassNameVariants } from 'scenes/components/Header/SummaryBlock/utils';

import StatusContainer from 'scenes/components/Header/SummaryBlock/StatusContainer';
import StatusLabel from 'scenes/components/Header/SummaryBlock/StatusLabel';
import StatusIcon from 'scenes/components/Header/SummaryBlock/StatusIcon';
import Wrapper from 'scenes/components/Header/SummaryBlock/Wrapper';
import Stat from 'scenes/components/Header/SummaryBlock/Stat';


// Exercise 01/02
// ===========
function StatusBlock(props) {
  // You will need to UNCOMMENT this function call.
  // This will return an object whose contents are 2 nodes:
  // 1) `color` -- class name for controlling the color
  // 2) `icon` -- class name for controlling the icon
  //
  // You should use these in your component to ensure the
  // correct icon and colour are displayed based on the
  // status passed into our component.
  const classNames = getClassNameVariants(props.status);

  return (
    <div>
      <Wrapper colorClassName={classNames.color}>
        <Stat>{props.stat}</Stat>

        <StatusContainer>
          <StatusIcon iconClassName={classNames.icon} />
          <StatusLabel label={props.status} />
        </StatusContainer>
      </Wrapper>
    </div>
  );
}

// Add runtime type checking for our component props
StatusBlock.propTypes = {
  status: PropTypes.string.isRequired,
  stat: PropTypes.number.isRequired,
};

export default StatusBlock;
