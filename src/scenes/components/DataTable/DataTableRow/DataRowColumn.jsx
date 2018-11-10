import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

const DataRowColumn = ({ children, className }) => (
  <div className={cx('flex-1', className)}>
    {children}
  </div>
);

DataRowColumn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string, // eslint-disable-line
};

// Use display name API, so we can find it with Enzyme.
DataRowColumn.displayName = 'DataRowColumn';

export default DataRowColumn;
