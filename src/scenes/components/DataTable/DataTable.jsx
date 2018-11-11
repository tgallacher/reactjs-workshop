/* eslint react/require-default-props: off */
import React from 'react';
import { List } from 'react-virtualized';
import PropTypes from 'prop-types';

import { css } from 'emotion';
import DataTableHeading from './DataTableHeading';
import DataTableRow from './DataTableRow';

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

DataTable.propTypes = {
  rowData: PropTypes.arrayOf(PropTypes.shape({
    statusSince: PropTypes.number,
    functions: PropTypes.arrayOf(PropTypes.string),
    sources: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    name: PropTypes.string,
    team: PropTypes.string,
  })),
};

export default DataTable;
