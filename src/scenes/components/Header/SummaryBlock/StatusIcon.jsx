/* eslint
  react/require-default-props: off,
*/
import React from 'react';
import PropTypes from 'prop-types';

const StatusIcon = ({ iconClassName = '' }) => (
  <div>
    <i className={iconClassName} />
  </div>
);

StatusIcon.propTypes = {
  iconClassName: PropTypes.string,
};

StatusIcon.displayName = 'StatusIcon';

export default StatusIcon;
