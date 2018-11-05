import React from 'react';

import AppBar from './components/AppBar';
import Header from './components/Header';
import DataTable from './components/DataTable';

const App = ({ data = []}) => (
  <React.Fragment>
    <AppBar />
    <Header />
    <DataTable rowData={data} />
  </React.Fragment>
);

export default App;
