
export const defaultState = [];

// Action Constants

export const CONSULTANTS_START_FETCH_CYCLE = 'CONSULTANTS.FETCH.CYCLE.START';
export const CONSULTANTS_STOP_FETCH_CYCLE = 'CONSULTANTS.FETCH.CYCLE.END';
export const CONSULTANTS_FETCH_COMPLETE = 'CONSULTANTS.FETCH.CYCLE.COMPLETE';

// Action Creators
export const startFetchCycle = () => ({
  type: CONSULTANTS_START_FETCH_CYCLE,
});

export const stopFetchCycle = () => ({
  type: CONSULTANTS_STOP_FETCH_CYCLE,
});

export const consultantFetchComplete = data => ({
  type: CONSULTANTS_FETCH_COMPLETE,
  payload: { data },
  error: data instanceof Error,
});

// Root resource reducer

export default (prevState = defaultState, action) => {
  switch (action.type) {
    case CONSULTANTS_FETCH_COMPLETE:
      return action.payload.data || [];

    default:
      return prevState;
  }
};
