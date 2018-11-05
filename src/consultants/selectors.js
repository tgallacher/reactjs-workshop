import { createSelector } from 'reselect';

import {
  isStatusUnavailable,
  isStatusAvailable,
  isStatusBusy,
} from '../utils/status';
import {
  sortConsultantsAlphabeticallyByNode
} from './utils';
import {
  makeGetFilterBy,
} from '../ui/selectors';

const getRootSliceFromStore = state => state.consultants;

export const getNumberOfConsultantsInAvailableState = createSelector(
  getRootSliceFromStore,
  (consultants = []) => consultants.filter(consultant => isStatusAvailable(consultant.status)).length,
);

export const getNumberOfConsultantsInUnavailableState = createSelector(
  getRootSliceFromStore,
  (consultants = []) => consultants.filter(consultant => isStatusUnavailable(consultant.status)).length,
);

export const getNumberOfConsultantsInBusyState = createSelector(
  getRootSliceFromStore,
  (consultants = []) => consultants.filter(consultant => isStatusBusy(consultant.status)).length,
);

export const getConsultants = createSelector(
  getRootSliceFromStore,
  makeGetFilterBy,
  (consultants = [], getFilterBy) => {
    const sourceFilters = getFilterBy('sources');
    const teamFilters = getFilterBy('teams');
    const fnFilters = getFilterBy('functions');

    const filteredConsultants = consultants
      .filter(consultant => teamFilters.length > 0
        ? teamFilters.includes(consultant.team)
        : true // keep if we have no filters
      )
      .filter(consultant => fnFilters.length > 0
        ? consultant.functions.reduce((hasFn, fn) => hasFn || fnFilters.includes(fn), false)
        : true // keep if we have no filters
      )
      .filter(consultant => sourceFilters.length > 0
        ? consultant.sources.reduce((hasSource, source) => hasSource || sourceFilters.includes(source), false)
        : true // keep if we have no filters
      );

    return sortConsultantsAlphabeticallyByNode(filteredConsultants, 'team');
  },
);
