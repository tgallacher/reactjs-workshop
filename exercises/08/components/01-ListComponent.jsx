/* eslint
  react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  react/no-multi-comp: off,
  max-len: off,
*/
import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './01-ListItemComponent';

const List = ({
  handleClick,
  activeItem,
  values,
}) => (
  <ul className="list-reset m-0 p-0 mt-5">
    {values.map((value, idx) => (
      <ListItem
        handleClick={handleClick}
        activeIndex={activeItem}
        index={idx}
        value={value}
        key={value}
      />
    ))}
  </ul>
);

List.propTypes = {
  handleClick: PropTypes.func,
  activeItem: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
