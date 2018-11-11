/* eslint
  react/require-default-props: off,
*/
import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'react-emotion';
import { rgba } from 'polished';

import {
  isStatusUnavailable,
  isStatusAvailable,
  isStatusBusy,
} from 'utils/status';

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

const Wrapper = ({
  className,
  isHeading,
  children,
  status,
}) => (
  <div
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
      },
      className,
    )}
  >
    {children}
  </div>
);

Wrapper.propTypes = {
  isHeading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  status: PropTypes.string,
};

Wrapper.defaultProps = {
  className: '',
};

export default Wrapper;
