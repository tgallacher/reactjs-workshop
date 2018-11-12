/* eslint
  react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  max-len: off,
*/
import React from 'react';
import PropTypes from 'prop-types';

import DataTableHeading from 'scenes/components/DataTable/DataTableHeading';
import DataRow from '../03/02';

// Exercise 04/01
// ===========
//
// This exercise builds on the last; we will begin to build up our "Data table".
// The primary focus here will be how we can us JS expressions to build UI by repeating
// over collections of data.
//
// Tasks
// --------
// ✅    Your component should accept a `data` prop, with type `object[]` (array of objects)
// ✅    Each object in the array will contain the same props used in Exercise 03/02 (see prop types below for reference)
// ✅    Your component should output a heading row for our table; use the `DataTableHeading` component (no props) for this
// ✅    Your component should output a `DataRow` for each entry in our object array, passing each prop from the object to our row component
// ✅    Your component should adhere to ReactJs guidelines when generating repeating UI components
// ✅    Your component should display the table heading component and the text 'No data to display' (inside a <div />), when the data prop is absent
//
// 🚫   Specific styling of the component is not part of this exercise (that'll come later)
// 🚫   Sorting, or chaning the order of the data is out of scope (that'll come later)
//
// Tips
// ------
// 🐨  Some ES6 features can help simplify the code you have to write; think about which ones might be able to help
// 🐨  Some ReactJS good practices might be found in the console (NOTE: ReactJS only outputs these when using the ReactJS dev-build)
// 🐨  The DataTable.propTypes (below) can be useful to summary the expected shape of your props
class DataTable extends React.Component {
  render() {
    return (
      <div className="w-full">
        Start HERE!
      </div>
    );
  }
}

// Add runtime prop validation
DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    functions: PropTypes.arrayOf(PropTypes.string),
    sources: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    team: PropTypes.string,
    name: PropTypes.string,
  })),
};

export default DataTable;
