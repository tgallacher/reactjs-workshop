import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  CONSULTANTS_START_FETCH_CYCLE,
  CONSULTANTS_STOP_FETCH_CYCLE,
  consultantFetchComplete,
} from './ducks';
import { fetchConsultantData } from './services';
import { transformConsultantNode } from './utils';

/**
 * Main wrapping Saga for continually polling endpoint.
 */
const startFetchCycleSaga = function*() {
  // run once for now
  yield fetchConsultantDataSaga();
};

/**
 * Clean up any polling resources
 */
const stopFetchCycleSaga = function*() {

};

/**
 * Primary Saga for fetching consultant data from
 * upstream API service.
 */
const fetchConsultantDataSaga = function*() {
  try {
    const rawData = yield call(fetchConsultantData);

    // Normalise data to match app
    const data = yield all(Object
      .keys(rawData)
      .map(
        consultantUsername => call(transformConsultantNode, rawData[consultantUsername]),
      ));

    yield put(consultantFetchComplete(data));
  } catch (error) {
    return; // drop errors for now
  }
};

export default function* rootConsultantSaga() {
  yield takeLatest(CONSULTANTS_START_FETCH_CYCLE, startFetchCycleSaga);
  yield takeLatest(CONSULTANTS_STOP_FETCH_CYCLE, stopFetchCycleSaga);
}
