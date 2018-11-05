import { race, call, put, all, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  CONSULTANTS_START_FETCH_CYCLE,
  CONSULTANTS_STOP_FETCH_CYCLE,
  consultantFetchComplete,
} from './ducks';
import { fetchConsultantData } from './services';
import { transformConsultantNode } from './utils';

let shouldShuffle = false;

/**
 * Primary Saga for fetching consultant data from
 * upstream API service.
 */
const fetchConsultantDataSaga = function*() {
  while (true) {
    try {
      const rawData = yield call(fetchConsultantData);

      const consultantUsernames = Object.keys(rawData);
      const numConsultants = consultantUsernames.length;

      // Portion of array whose values should be randomised
      const randomisationFactor = 10;

      // Normalise data to match app
      const data = yield all(consultantUsernames
        .sort(() => shouldShuffle
          ? Math.random() - Math.random()
          : 0
        )
        .map(
          (consultantUsername, idx) => call(transformConsultantNode, rawData[consultantUsername], idx % Math.floor(numConsultants / randomisationFactor) === 0),
        ));


      shouldShuffle = ! shouldShuffle;

      yield put(consultantFetchComplete(data));
      yield call(delay, 8000);
    } catch (error) {
      // return; // drop errors for now
      console.error(error);
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
