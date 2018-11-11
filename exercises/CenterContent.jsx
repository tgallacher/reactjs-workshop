import React from 'react';
import PropTypes from 'prop-types';

const CenterContent = ({ children }) => (
  <section className="flex h-screen w-screen items-center justify-center">
    {children}
  </section>
);

CenterContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CenterContent;
