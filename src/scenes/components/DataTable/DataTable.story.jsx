import React from 'react';
import { storiesOf } from '@storybook/react';

import DataTable, {
  DataTableHeading,
  DataTableRow,
} from './index';
import {
  STATUS_STATE_UNAVAILABLE,
  STATUS_STATE_AVAILABLE,
} from '../utils/status';


const DataTableStories = storiesOf('DataTable', module);
const DataTableHeadingStories = storiesOf('DataTable/Heading', module);
const DataTableRowStories = storiesOf('DataTable/Row', module);

// Data Table Heading
DataTableHeadingStories
.add('Default', () => (
  <DataTableHeading />
  ));

// Data Table Row
DataTableRowStories
  .add('Default', () => (
    <DataTableRow />
  ))
  .add('Available (long status time)', () => (
    <DataTableRow
      name='John Doe'
      team= 'Alpha'
      sources={[
        'Referrals',
        'Campaign',
      ]}
      functions={[
        'Renewals',
        'Primary Sales',
        'Secondary Sales',
      ]}
      status={STATUS_STATE_AVAILABLE}
      status_since={1537786989.1483066}
    />
  ))
  .add('Available', () => (
    <DataTableRow
      name='John Doe'
      team= 'Beta'
      sources={[
        'Referrals',
        'Campaign',
      ]}
      functions={[
        'Renewals',
        'Primary Sales',
        'Secondary Sales',
      ]}
      status={STATUS_STATE_AVAILABLE}
    />
  ))
  .add('Unavailable', () => (
    <DataTableRow
      name='Jane Smith'
      team= 'Alpha'
      sources={[
        'Cold Call',
        'Campaign',
      ]}
      functions={[
        'Primary Sales',
        'Secondary Sales',
      ]}
      status={STATUS_STATE_UNAVAILABLE}
    />
  ))
  .add('Busy', () => (
    <DataTableRow
      name='Alice Bob'
      team= 'Gamma'
      sources={[
        'Campaign',
      ]}
      functions={[
        'Primary Sales',
      ]}
      status="Meeting"
    />
  ));

// Data Table
DataTableStories
  .add('Default', () => {
    const data = [
      {
        name: 'Alice Bob',
        team:  'Beta',
        sources: [
          'Campaign',
        ],
        functions: [
          'Primary Sales',
        ],
        status: "Meeting",
      },
      {
        name: 'Jane Smith',
        team:  'Beta',
        sources: [
          'Cold Call',
          'Campaign',
        ],
        functions: [
          'Primary Sales',
          'Secondary Sales',
        ],
        status: STATUS_STATE_UNAVAILABLE,
      },
      {
        name: 'John Doe',
        team:  'Beta',
        sources: [
          'Referrals',
          'Campaign',
        ],
        functions: [
          'Secondary Sales',
          'Renewals',
          'Primary Sales',
        ],
        status: STATUS_STATE_AVAILABLE,
      },
      {
        name: 'Alice Bob',
        team:  'Gamma',
        sources: [
          'Campaign',
        ],
        functions: [
          'Primary Sales',
        ],
        status: "Meeting",
      },
      {
        name: 'Jane Smith',
        team:  'Alpha',
        sources: [
          'Cold Call',
          'Campaign',
        ],
        functions: [
          'Primary Sales',
          'Secondary Sales',
        ],
        status: STATUS_STATE_UNAVAILABLE,
      },
      {
        name: 'John Doe',
        team:  'Beta',
        sources: [
          'Referrals',
          'Campaign',
        ],
        functions: [
          'Secondary Sales',
          'Renewals',
          'Primary Sales',
        ],
        status: STATUS_STATE_AVAILABLE,
      }
    ];

    return (
      <DataTable rowData={data} />
    );
  });
