import React from 'react';
import styled from 'react-emotion';

const Div = styled('div')`
  max-width: 100px;
`;

const Wrapper = ({ colorClassName = 'text-green-dark', ...props }) => (
  <Div
    className={`flex items-center text-center ${colorClassName}`}
    {...props}
  />
);

Wrapper.displayName = 'Wrapper';

export default Wrapper;
