import { createSelector, defaultMemoize } from 'reselect';

const getRootSliceFromStore = state => state.ui;

export const getSortBy = createSelector(
  getRootSliceFromStore,
  ui => ui.sortBy,
);

export const getFilters = createSelector(
  getRootSliceFromStore,
  ui => ui.filters,
);

export const makeGetFilterBy = createSelector(
  getRootSliceFromStore,
  ui => defaultMemoize(
    filterType => filterType in ui.filterBy
      ? ui.filterBy[filterType]
      : [],
  ),
);
