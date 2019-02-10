import React from 'react';

import DataTableRow from './DataTableRow';

const DataTableHeading = ({
  consultantNameHeader = 'Member',
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

// Use display name API, so we can find it with Enzyme.
DataTableHeading.displayName = 'DataTableHeading';

export default DataTableHeading;
