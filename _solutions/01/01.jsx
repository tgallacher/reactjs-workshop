/* eslint
  react/destructuring-assignment: off,
  react/prop-types: off,
*/
import React from 'react';

// Exercise 01/01
// ===========
function StatusBlock(props) {
  return (
    <div>
      {props.stat}
      <i className="far fa-user" />
      {props.status.charAt(0).toUpperCase() + props.status.substr(1).toLowerCase()}
    </div>
  );
}

export default StatusBlock;
