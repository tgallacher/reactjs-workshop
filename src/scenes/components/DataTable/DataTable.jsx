import React from 'react';
import { List } from 'react-virtualized';

import { css } from 'emotion';
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
  <section className="max-w-4xl mx-auto">
    <DataTableHeading className={css`margin-bottom: 0.5em;`} />

    <List
      className={css`width: 100%;`}
      width={1440}
      rowHeight={40}
      height={900}
      rowCount={rowData.length}
      rowRenderer={({
        key, index, style,
      }) => (
        <div key={key} style={style}>
          <DataTableRow {...rowData[index]} />
        </div>
      )}
    />
  </section>
);

export default DataTable;
