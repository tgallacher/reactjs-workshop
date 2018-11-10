/* eslint import/no-extraneous-dependencies: off */
import React from 'react';
import { storiesOf } from '@storybook/react';

import SummaryBlock from './index';

storiesOf('Demo App/Header/SummaryBlock', module)
  .add('Default', () => <SummaryBlock />)
  .add('Busy', () => <SummaryBlock status="busy" stat="29" />)
  .add('Available', () => <SummaryBlock status="available" stat="49" />)
  .add('Unavailable', () => <SummaryBlock status="unavailable" stat="83" />);
