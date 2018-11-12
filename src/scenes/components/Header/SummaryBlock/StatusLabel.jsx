/* eslint
  react/require-default-props: off,
*/
import React from 'react';
import PropTypes from 'prop-types';

const StatusLabel = ({ label = '' }) => (
  <div className="text-xs p-0 m-0">
    {label.charAt(0).toUpperCase() + label.substr(1).toLocaleLowerCase()}
  </div>
);

StatusLabel.propTypes = {
  label: PropTypes.string,
};

StatusLabel.displayName = 'StatusLabel';

export default StatusLabel;
