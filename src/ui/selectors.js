import { createSelector } from 'reselect';

const getRootSliceFromStore = state => state.ui;

export const getSortBy = createSelector(
  getRootSliceFromStore,
  ui => ui.sortBy,
);

export const getFilters = createSelector(
  getRootSliceFromStore,
  ui => ui.filters,
);

export const getTeamFilterOptions = createSelector(
  getFilters,
  filters => filters.teams,
);

export const getSourceFilterOptions = createSelector(
  getFilters,
  filters => filters.sources,
);

export const getFunctionFilterOptions = createSelector(
  getFilters,
  filters => filters.functions,
);


