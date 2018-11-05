import { createSelector } from 'reselect';

import {
  isStatusUnavailable,
  isStatusAvailable,
  isStatusBusy,
} from '../utils/status';
import {
  sortConsultantsAlphabeticallyByNode
} from './utils';

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
  (consultants = []) => {
    return sortConsultantsAlphabeticallyByNode(consultants, 'team');
  },
);
