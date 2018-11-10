import React from 'react';
import PropTypes from 'prop-types';

import DataRowColumn from './DataRowColumn';

const StatusColumn = ({ children }) => (
  <DataRowColumn className="flex justify-between">
    {children}
  </DataRowColumn>
);

StatusColumn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StatusColumn;
