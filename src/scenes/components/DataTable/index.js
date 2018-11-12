import { connect } from 'react-redux';

import { getConsultants } from 'consultants/selectors';
import DataTable from './DataTable';

export { default as DataTableHeading } from './DataTableHeading';
export { default as DataTableRow } from './DataTableRow';

const mapStateToProps = state => ({
  rowData: getConsultants(state),
});

export default connect(mapStateToProps)(DataTable);
