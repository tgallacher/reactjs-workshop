/* eslint import/no-extraneous-dependencies: off */
import React from 'react';
import { storiesOf } from '@storybook/react';

import App from './index';
import {
  STATUS_STATE_UNAVAILABLE,
  STATUS_STATE_AVAILABLE,
} from '/utils/status';

const data = [
  {
    name: 'Alice Bob',
    team: 'Achillies',
    sources: [
      'Internal',
    ],
    functions: [
      'Sales',
    ],
    status: 'Meeting',
  },
  {
    name: 'Jane Smith',
    team: 'Aphrodite',
    sources: [
      'Outbound',
      'Internal',
    ],
    functions: [
      'Sales',
      'Tc Sales',
    ],
    status: STATUS_STATE_UNAVAILABLE,
  },
  {
    name: 'John Doe',
    team: 'Apollo',
    sources: [
      'Inbound',
      'Internal',
    ],
    functions: [
      'Tc Sales',
      'Renewals',
      'Sales',
    ],
    status: STATUS_STATE_AVAILABLE,
  },
  {
    name: 'Alice Bob',
    team: 'Achillies',
    sources: [
      'Internal',
    ],
    functions: [
      'Sales',
    ],
    status: 'Meeting',
  },
  {
    name: 'Jane Smith',
    team: 'Aphrodite',
    sources: [
      'Outbound',
      'Internal',
    ],
    functions: [
      'Sales',
      'Tc Sales',
    ],
    status: STATUS_STATE_UNAVAILABLE,
  },
  {
    name: 'John Doe',
    team: 'Apollo',
    sources: [
      'Inbound',
      'Internal',
    ],
    functions: [
      'Tc Sales',
      'Renewals',
      'Sales',
    ],
    status: STATUS_STATE_AVAILABLE,
  },
];

storiesOf('Demo App/App', module)
  .add('App', () => (
    <App data={data} />
  ));
