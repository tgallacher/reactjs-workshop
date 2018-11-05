import React from 'react';
import { connect } from 'react-redux';

import DataTableHeading from './DataTableHeading';
import DataTableRow from './DataTableRow';

export { default as DataTableHeading } from './DataTableHeading';
export { default as DataTableRow } from './DataTableRow';

// Shape of 'rowData' === data[]
// Shape of 'data' ===
// {
//  name: string,
//  team: string,
//  sources: string[],
//  functions: string[],
//  status: string,
//  status_since: number,
// }
const DataTable = ({ rowData = [] }) => (
  <section className="max-w-4xl mx-auto">
    <DataTableHeading />

    {rowData.map(data => (
      <DataTableRow key={`${data.username}-${data.team}`} {...data} />
    ))}
  </section>
);

const mapStateToProps = state => ({
  rowData: state,
})

export default connect(mapStateToProps)(DataTable);
