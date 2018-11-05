import { race, call, put, all, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  CONSULTANTS_START_FETCH_CYCLE,
  CONSULTANTS_STOP_FETCH_CYCLE,
  consultantFetchComplete,
} from './ducks';
import { fetchConsultantData } from './services';
import { transformConsultantNode } from './utils';

/**
 * Primary Saga for fetching consultant data from
 * upstream API service.
 */
const fetchConsultantDataSaga = function*() {
  while (true) {
    try {
      const rawData = yield call(fetchConsultantData);

      // Normalise data to match app
      const data = yield all(Object
        .keys(rawData)
        .map(
          consultantUsername => call(transformConsultantNode, rawData[consultantUsername]),
        ));

      yield put(consultantFetchComplete(data));
      yield call(delay, 8000);
    } catch (error) {
      return; // drop errors for now
    }
  }
};

export default function* rootConsultantSaga() {
  while (true) {
    yield take(CONSULTANTS_START_FETCH_CYCLE);
    yield race([
      call(fetchConsultantDataSaga),
      take(CONSULTANTS_STOP_FETCH_CYCLE)
    ]);
  }
}
