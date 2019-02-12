/* eslint
  react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  max-len: off,
*/
import React from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled, { css, cx } from 'react-emotion'; // REMOVE the imports which you don't use

import DataTableHeading from 'scenes/components/DataTable/DataTableHeading';
import DataRow from '../03/02';

// Exercise 05/01
// ===========
//
// Continuing to build on the last exercise, we will begin to think about styling our data rows,
// with the aim of linking the team member status attribute to the styling of the row, i.e. its background colour.
//
// We will need to COPY our solution from "Exercise 04/01". In this exercise we will wrap each
// row within a "Wrapper" container, which will contain our dynamic styling. We will use EmotionJS
// as our chosen CSS-in-JS solution.
//
// Tasks
// --------
// ✅    Your component should behave exactly as it did in the last exercise
// ✅    Your component should style each row (`DataRow` component) according to the current value of the `status` prop. Looking below at PropTypes,
//        this prop can be 1 of 3 possible values (when defined): `available` | `unavailable` | `busy`.
//        The following status COLORS should be used:
//        available     => #008744
//        unavailable   => #D75400
//        busy          => #90479B
// ✅    Each row should be wrapped by a `<div>` element; this wrapper element should add the following style attributes, and accent them with the above colors based on the `status` prop:
//        bacground-color with an opacity of 0.15
//        border-bottom with an border width of 2px
//        border-left with an border width of 4px
//
// 🚫   Sorting, or chaning the order of the data is out of scope (that'll come later)
//
// Tips
// ------
// 🐨   The CSS-in-JS helpers have all been imported at the top. Use whichever method you prefer;
//        Don't forget to remove the unused imports to keep our linter happy 👍
// 🐨   Use the `rgba` helper from the `polished` library to convert HEX to RGBA, e.g. rgba(hexColor, opacityValue)
//        @see https://polished.js.org/docs/#rgba for more details
// 🐨   EmotionJS (short) docs for reference: https://emotion.sh/
// 🐨   If you prefer manipulating functional CSS utility classnames, you can use Tailwind as it is already part of the setup:
//        @see https://tailwindcss.com/docs/
//
// CSS-in-JS Area
// Add your CSS-in-JS components outside your component, here.
class StyledDataTable extends React.Component {
  render() {
    return (
      <div className="w-full">
        Start HERE!
      </div>
    );
  }
}

// Add prop validation
StyledDataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    functions: PropTypes.arrayOf(PropTypes.string),
    sources: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    team: PropTypes.string,
    name: PropTypes.string,
  })),
};

export default StyledDataTable;
