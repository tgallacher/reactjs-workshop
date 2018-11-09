import { createSelector } from 'reselect';

import {
  isStatusUnavailable,
  isStatusAvailable,
  isStatusBusy,
} from 'utils/status';
import {
  makeGetFilterBy,
  getSortBy,
} from 'ui/selectors';
import {
  sortConsultantsAlphabeticallyByNode,
} from './utils';

const getRootSliceFromStore = state => state.consultants;

export const getConsultants = createSelector(
  getRootSliceFromStore,
  makeGetFilterBy,
  getSortBy,
  (consultants = [], getFilterBy, sortBy) => {
    const sourceFilters = getFilterBy('sources');
    const teamFilters = getFilterBy('teams');
    const fnFilters = getFilterBy('functions');

    const filteredConsultants = consultants
      .filter(
        consultant => teamFilters.length > 0
          ? teamFilters.includes(consultant.team)
          : true, // keep if we have no filters
      )
      .filter(
        consultant => fnFilters.length > 0
          ? consultant.functions.reduce((hasFn, fn) => hasFn || fnFilters.includes(fn), false)
          : true, // keep if we have no filters
      )
      .filter(
        consultant => sourceFilters.length > 0
          ? consultant.sources.reduce((hasSource, source) => hasSource || sourceFilters.includes(source), false)
          : true, // keep if we have no filters
      );

    const sortedByName = sortConsultantsAlphabeticallyByNode(filteredConsultants, 'username');

    return sortConsultantsAlphabeticallyByNode(sortedByName, sortBy);
  },
);

export const getNumberOfConsultantsInAvailableState = createSelector(
  getConsultants,
  (consultants = []) => consultants.filter(consultant => isStatusAvailable(consultant.status)).length,
);

export const getNumberOfConsultantsInUnavailableState = createSelector(
  getConsultants,
  (consultants = []) => consultants.filter(consultant => isStatusUnavailable(consultant.status)).length,
);

export const getNumberOfConsultantsInBusyState = createSelector(
  getConsultants,
  (consultants = []) => consultants.filter(consultant => isStatusBusy(consultant.status)).length,
);
