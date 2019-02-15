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
import { cx } from 'emotion';

import { ActiveContext } from '../01';

class ListItem extends React.Component {
  render() {
    const { value, index } = this.props;

    return (
      <ActiveContext.Consumer>
        {({ activeIndex, handleUpdateIndex }) => (
          <li
            role="presentation"
            onClick={() => handleUpdateIndex(index)}
            className={cx(
              'font-sans font-light text-sm text-white',
              'border-solid border-b-2 border-l-4',
              'h-10 px-2 pt-3 mb-1',
              'cursor-pointer',
              {
                'bg-purple-light border-purple-darker hover:bg-purple': index !== activeIndex,
                'bg-teal-light border-teal-darker hover:bg-teal': index === activeIndex,
              },
            )}
          >
            {value}
          </li>
        )}
      </ActiveContext.Consumer>
    );
  }
}

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default ListItem;
