import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';

import { startFetchCycle, stopFetchCycle } from '../../../consultants/ducks';
import store from '../../../boot/store';

import Header from './index';
import SummaryBlock from './SummaryBlock';

const storeDecorator = (story) => {
  store.dispatch(startFetchCycle());

  // Need to call stop, as fetch data cycles
  // on a HTTP polling loop. We don't need the data
  // to be pulled constantly; so, give it time to fetch data
  // and the "race" condition to be satisfied, then cancel the
  // data polling loop by dispatching the stop action creator.
  setTimeout(() => {
    store.dispatch(stopFetchCycle());
  }, 8000);

  return (
    <Provider store={store}>
      {story()}
    </Provider>
  );
}

storiesOf('Header/SummaryBlock', module)
  .addDecorator(storeDecorator)
  .add('Default', () => <SummaryBlock />)
  .add('Busy', () => <SummaryBlock  status="On Call" stat="29" />)
  .add('Available', () => <SummaryBlock  status="Ready" stat="49" />)
  .add('Unavailable', () => <SummaryBlock  status="Meeting" stat="83" />);

storiesOf('Header', module)
  .addDecorator(storeDecorator)
  .add('Header', () => <Header  />);
