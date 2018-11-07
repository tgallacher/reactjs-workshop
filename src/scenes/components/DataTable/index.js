import React from 'react';
import { connect } from 'react-redux';
import { List } from 'react-virtualized';

import { getConsultants } from '../../../consultants/selectors';
import DataTableHeading from './DataTableHeading';
import DataTableRow from './DataTableRow';
import { css } from 'emotion';

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
  <DataTableHeading className={css`margin-bottom: 0.5em;`} />

    {/* {rowData.map(data => (
      <DataTableRow key={`${data.username}-${data.team}`} {...data} />
    ))} */}
    <List
      className={css`width: 100%;`}
      width={1440}
      rowHeight={40}
      height={900}
      rowCount={rowData.length}
      rowRenderer={({ key, index, style, isScrolling }) => (
        <div key={key} style={style}>
          <DataTableRow {...rowData[index]} />
        </div>
      )}
    />
  </section>
);

const mapStateToProps = state => ({
  rowData: getConsultants(state),
})

export default connect(mapStateToProps)(DataTable);
