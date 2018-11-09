/* eslint import/prefer-default-export: off */
import React from 'react';
import { Provider } from 'react-redux';

import { startFetchCycle, stopFetchCycle } from 'consultants/ducks';
import store from 'boot/store';

export const storeDecorator = (story) => {
  store.dispatch(startFetchCycle());

  // We need to call stop data fetch action, as fetch data
  // cycles a HTTP polling loop. As we don't need the data
  // to be pulled constantly, we will give the polling loop
  // some time to kick-start, and satisfy the "race"
  // condition then cancel the data polling loop by
  // dispatching the stop action creator.
  setTimeout(() => {
    store.dispatch(stopFetchCycle());
  }, 8000);

  return (
    <Provider store={store}>
      {story()}
    </Provider>
  );
};
