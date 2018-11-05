import { createSelector } from 'reselect';

import {
  isStatusUnavailable,
  isStatusAvailable,
  isStatusBusy,
} from '../utils/status';


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
  (consultants = []) => consultants,
);
