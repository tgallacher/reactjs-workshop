import React from 'react';

import AppBar from '../AppBar';
import Header from '../Header';
import DataTable from '../DataTable';

const App = ({ data = []}) => (
  <React.Fragment>
    <AppBar />
    <Header />
    <DataTable rowData={data} />
  </React.Fragment>
);

export default App;
