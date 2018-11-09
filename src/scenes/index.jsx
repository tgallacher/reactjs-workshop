import React from 'react';
import { Provider } from 'react-redux';

import store from 'boot/store';
import { startFetchCycle, stopFetchCycle } from 'consultants/ducks';

import AppBar from './components/AppBar';
import Header from './components/Header';
import DataTable from './components/DataTable';

class App extends React.Component {
  componentDidMount() {
    // Makes initial request
    store.dispatch(startFetchCycle());
  }

  componentWillUnmount() {
    store.dispatch(stopFetchCycle());
  }

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <AppBar />
          <Header />
          <DataTable />
        </React.Fragment>
      </Provider>
    );
  }
}


export default App;
