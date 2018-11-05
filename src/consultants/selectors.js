import { createSelector } from 'reselect';

import {
  isStatusUnavailable,
  isStatusAvailable,
  isStatusBusy,
} from '../utils/status';

import { sortArrayAlphabetically } from '../utils/misc';

const sortConsultantsByTeam = consultants => {
  // Sorts alphabetical order
  const sortedTeams = consultants.map(c => c.team).sort((a,b) => {
    if (a < b) return -1;
    if (a > b) return 1;

    return 0;
  });
  const uniqTeams = [...(new Set(sortedTeams))];

  return [].concat(
    ...uniqTeams.map(
      t => consultants.filter(
        c => c.team === t
      )
    )
  );
}


export const getNumberOfConsultantsInAvailableState = createSelector(
  state => state,
  (consultants = []) => consultants.filter(consultant => isStatusAvailable(consultant.status)).length,
);

export const getNumberOfConsultantsInUnavailableState = createSelector(
  state => state,
  (consultants = []) => consultants.filter(consultant => isStatusUnavailable(consultant.status)).length,
);

export const getNumberOfConsultantsInBusyState = createSelector(
  state => state,
  (consultants = []) => consultants.filter(consultant => isStatusBusy(consultant.status)).length,
);

export const getConsultants = createSelector(
  state => state,
  (consultants = []) => {
    return sortConsultantsByTeam(consultants);
  },
);
