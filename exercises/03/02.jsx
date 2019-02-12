/*
  eslint react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  max-len: off,
*/
import React from 'react';
import PropTypes from 'prop-types';

import DataColumn from 'scenes/components/DataTable/DataTableRow/DataRowColumn';

// Exercise 03/02
// ===========
//
// This exercise extends the previous exercise, where will add a few more columns in
// our `Row` component. While the tasks might seem exactly the same as before,
// keep a close eye as there have been some tweaks to the requirements.
//
// NOTE:
// You should copy your solution from exercise 03/01 as the starting point for this exercise, as it
// will save you some time.
//
// Tasks
// --------
// ✅    Your component should accept a `team` prop, with type `string`
// ✅    Your component should render the `team` prop inside its own `DataColumn` component
// ✅    This `DataColumn` component should be given an `id` attribute, with the value `team`
// ✅    Your component should render the `team` prop if provided, and `Unknown Team` if absent
//
// ✅    Your component should accept a `functions` prop, with type `string[]` (Array of strings)
// ✅    Your component should render the `funtions` prop inside its own `DataColumn` component, as a comma+space separated list
//        e.g. `foo, bar, baz` [no trailing comma]
// ✅    This `DataColumn` component should be given an `id` attribute, with the value `functions`
// ✅    Your component should render the `funtions` prop if provided, and the string `-` if absent, or the array is empty
//
// ✅    Your component should accept a `status` prop, with type string
// ✅    Your component should handle the `status` prop exactly as it does the `team` prop
// ✅    Your component should render the `status` prop if provided, and `Unknown Status` if absent
//
// ✅    Your component should accept a `name` prop, with type string
// ✅    Your component should handle the `name` prop exactly as it does the `team` prop
// ✅    Your component should render the `name` prop if provided, and `Unknown Consultant` if absent
//
// ✅    Your component should accept a `sources` prop, with type string[] (Array of strings)
// ✅    Your component should handle the `sources` prop exactly as it does the `functions` prop
//
// ✅    Your component should render the Data columns in the following order: `name` | `team` | `functions` | `sources` | `status`
//
// 🚫   Specific styling of the component is not part of this exercise
//
// Tips
// ------
// 🐨  The array helper, `Array.isArray` could prove useful here
// 🐨  Remember, `undefined` is a special object in JS, which you can use to 'short-circuit' some expressions
// 🐨  The Row.propTypes (below) is a useful insight into the expected shape of your props
class Row extends React.Component {
  render() {
    const { className } = this.props;
    const css = ['flex', 'w-full'];

    if (className) {
      css.push(className);
    }

    return (
      // Note, there is a performance penalty using `.join()` inline,
      // but it's ok for our demo app.
      <div className={css.join(' ')}>
        Start HERE!
      </div>
    );
  }
}

// Add prop validation
Row.propTypes = {
  className: PropTypes.string,
  functions: PropTypes.arrayOf(PropTypes.string),
  sources: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string,
  team: PropTypes.string,
  name: PropTypes.string,
};

export default Row;
