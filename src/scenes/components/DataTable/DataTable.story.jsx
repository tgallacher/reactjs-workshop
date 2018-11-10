/* eslint import/no-extraneous-dependencies: off */
import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  STATUS_STATE_UNAVAILABLE,
  STATUS_STATE_AVAILABLE,
} from 'utils/status';
import { storeDecorator } from 'utils/storybook';
import DataTable, {
  DataTableHeading,
  DataTableRow,
} from './index';

const DataTableStories = storiesOf('Demo App/DataTable', module);
const DataTableHeadingStories = storiesOf('Demo App/DataTable/Heading', module);
const DataTableRowStories = storiesOf('Demo App/DataTable/Row', module);

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
      name="John Doe"
      team="Alpha"
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
      statusSince={1537786989.1483066}
    />
  ))
  .add('Available', () => (
    <DataTableRow
      name="John Doe"
      team="Beta"
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
      name="Jane Smith"
      team="Alpha"
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
      name="Alice Bob"
      team="Gamma"
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
  .addDecorator(storeDecorator)
  .add('Default', () => {
    const data = [
      {
        name: 'Alice Bob',
        team: 'Beta',
        sources: [
          'Campaign',
        ],
        functions: [
          'Primary Sales',
        ],
        status: 'Meeting',
      },
      {
        name: 'Jane Smith',
        team: 'Beta',
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
        team: 'Beta',
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
        team: 'Gamma',
        sources: [
          'Campaign',
        ],
        functions: [
          'Primary Sales',
        ],
        status: 'Meeting',
      },
      {
        name: 'Jane Smith',
        team: 'Alpha',
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
        team: 'Beta',
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
    ];

    return (
      <DataTable rowData={data} />
    );
  });
