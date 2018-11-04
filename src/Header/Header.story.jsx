import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './index';
import SummaryBlock from './SummaryBlock';

storiesOf('Header', module)
  .add('Header', () => <Header  />)
  .add('SummaryBlock/Default', () => <SummaryBlock />)
  .add('SummaryBlock/Busy', () => <SummaryBlock  status="busy" stat="29" />)
  .add('SummaryBlock/Available', () => <SummaryBlock  status="available" stat="49" />)
  .add('SummaryBlock/Unavailable', () => <SummaryBlock  status="unavailable" stat="83" />);
