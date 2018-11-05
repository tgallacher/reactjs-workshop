import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  CONSULTANTS_START_FETCH_CYCLE,
  CONSULTANTS_STOP_FETCH_CYCLE,
  consultantFetchComplete,
} from './ducks';


const fetchConsultantData = async () => {
  const API_URL = ' https://demo3786895.mockable.io/consultants';

  const resp = await fetch(API_URL);

  return resp.json();
}

/**
 * Normalise raw data into format/shape expected inside app.
 *
 * @param {Object} consultantNode Raw consultant data node
 * @returns {Object}
 */
const transformConsultantNode = ({
  activity_changed_at,
  activity,
  username,
  functions,
  sources,
  friendly_name,
  team
}) => ({
  status_since: activity_changed_at,
  functions,
  username,
  sources: Array.isArray(sources)
    ? sources
      .filter(source => source !== 'direct_dial')
      .map(source => ({
        'phone': 'Inbound',
        'dialler': 'Dialler',
        'consultant': 'Internal'
      }[source]))
    : [],
  status: activity,
  name: friendly_name,
  team,
});





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

    console.log('rawData', rawData);

    // Normalise data to match app
    const data = yield all(Object
      .keys(rawData)
      .map(
        consultantUsername => call(transformConsultantNode, rawData[consultantUsername]),
      ));

    console.log('data', data);

    yield put(consultantFetchComplete(data));
  } catch (error) {
    return; // drop errors for now
  }
};

export default function* rootConsultantSaga() {
  yield takeLatest(CONSULTANTS_START_FETCH_CYCLE, startFetchCycleSaga);
  yield takeLatest(CONSULTANTS_STOP_FETCH_CYCLE, stopFetchCycleSaga);
}
