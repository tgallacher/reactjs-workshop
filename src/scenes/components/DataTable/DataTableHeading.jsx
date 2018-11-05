import React from 'react';

import DataTableRow from './DataTableRow';

const DataTableHeading = ({
  consultantNameHeader = 'Consultant',
  teamHeader = 'Team',
  functionsHeader = 'Function(s)',
  sourcesHeader = 'Source(s)',
  statusHeader = 'Status',
}) => (
  <DataTableRow
    isHeading
    functions={functionsHeader}
    sources={sourcesHeader}
    status={statusHeader}
    name={consultantNameHeader}
    team={teamHeader}
  />
);

export default DataTableHeading;
