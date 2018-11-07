import React from 'react';

import DataTableRow from './DataTableRow';

const DataTableHeading = ({
  consultantNameHeader = 'Consultant',
  teamHeader = 'Team',
  functionsHeader = 'Function(s)',
  sourcesHeader = 'Source(s)',
  statusHeader = 'Status',
  ...props
}) => (
  <DataTableRow
    isHeading
    functions={functionsHeader}
    sources={sourcesHeader}
    status={statusHeader}
    name={consultantNameHeader}
    team={teamHeader}
    {...props}
  />
);

export default DataTableHeading;
