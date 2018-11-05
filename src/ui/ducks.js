import { CONSULTANTS_FETCH_COMPLETE } from '../consultants/ducks';

export const defaultState = {
  filters: {
    teams: [],
    sources: [],
    functions: [],
  },
  sortBy: null
};

// Action Constants
export const UI_UPDATE_SORT_BY = 'ui.sort.by.update';

// Action Creators

export const updateSortBy = sortBy => ({
  type: UI_UPDATE_SORT_BY,
  payload: {
    sortBy,
  },
});

// Root resource reducer
export default (prevState = defaultState, action) => {
  switch (action.type) {
    case CONSULTANTS_FETCH_COMPLETE:
      // For simplicity, only update filters on initial load.
      // Therefore, if we already have team filters, we don't
      // need to update again.
      if (prevState.filters.teams.length > 0) {
        return prevState;
      }

      // Create an unique list of each consultant data
      // 'sources' and 'functions' require extra work as they
      // are already arrays; so we need to flatten them.
      return {
        ...prevState,
        filters: {
          teams: [...new Set(action.payload.data.map(consultant => consultant.team))],
          sources: [...new Set(
            action.payload.data.reduce((sources, consultant) => sources.concat(consultant.sources), [])
          )],
          functions: [...new Set(
            action.payload.data.reduce((functions, consultant) => functions.concat(consultant.functions), [])
          )],
        }
      }
    case UI_UPDATE_SORT_BY:
      return Object.assign(
        prevState,
        {
          sortBy: action.payload.sortBy,
        },
      );

    default:
      return prevState;
  }
};
