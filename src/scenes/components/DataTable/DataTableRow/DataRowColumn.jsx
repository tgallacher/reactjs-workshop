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

export default DataRowColumn;
