import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './index';
import SummaryBlock from './SummaryBlock';

storiesOf('Header/SummaryBlock', module)
  .add('Default', () => <SummaryBlock />)
  .add('Busy', () => <SummaryBlock  status="busy" stat="29" />)
  .add('Available', () => <SummaryBlock  status="available" stat="49" />)
  .add('Unavailable', () => <SummaryBlock  status="unavailable" stat="83" />);

storiesOf('Header', module)
  .add('Header', () => <Header  />);
