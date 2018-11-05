import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './index';
import SummaryBlock from './SummaryBlock';

storiesOf('Header/SummaryBlock', module)
  .add('Default', () => <SummaryBlock />)
  .add('Busy', () => <SummaryBlock  status="On Call" stat="29" />)
  .add('Available', () => <SummaryBlock  status="Ready" stat="49" />)
  .add('Unavailable', () => <SummaryBlock  status="Meeting" stat="83" />);

storiesOf('Header', module)
  .add('Header', () => <Header  />);
