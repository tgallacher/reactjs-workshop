import { connect } from 'react-redux';
import { hot } from 'react-hot-loader' // eslint-disable-line

import { getConsultants } from 'consultants/selectors';
import DataTable from './DataTable';

export { default as DataTableHeading } from './DataTableHeading';
export { default as DataTableRow } from './DataTableRow';

const mapStateToProps = state => ({
  rowData: getConsultants(state),
});

const ConnectedApp = connect(mapStateToProps)(DataTable);

export default hot(module)(ConnectedApp);
