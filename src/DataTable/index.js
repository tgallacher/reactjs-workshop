import React from 'react';

import DataTableHeading from './DataTableHeading';
import DataTableRow from './DataTableRow';

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
  <React.Fragment>
    <DataTableHeading />
    {rowData.map(data => (
      <DataTableRow key={`${data.name}-${data.team}`} {...data} />
    ))}
  </React.Fragment>
);

export { default as DataTableHeading } from './DataTableHeading';
export { default as DataTableRow } from './DataTableRow';
export default DataTable;
