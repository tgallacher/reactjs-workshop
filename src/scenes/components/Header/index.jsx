/* eslint
  react/require-default-props: off,
  no-nested-ternary: off,
*/
import React from 'react';
import styled from 'react-emotion';
import Select, { components } from 'react-select';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getNumberOfConsultantsInUnavailableState,
  getNumberOfConsultantsInAvailableState,
  getNumberOfConsultantsInBusyState,
} from 'consultants/selectors';
import {
  getFilters,
  makeGetFilterBy,
} from 'ui/selectors';
import {
  updateFilterBy,
  updateSortBy,
} from 'ui/ducks';
import SummaryIconBlock from './SummaryBlock';
import { generateOptionEntry } from './utils';

const Wrapper = styled('section')``;
const ContentWrapper = styled('div')``;

const FilterRowWrapper = styled('div')``;
const SummaryRowWrapper = styled('div')``;

const FilterInputColumn = styled('div')``;
const SortbyInputColumn = styled('div')``;

const formatGroupLabel = data => (
  <div className="flex text-purple items-center justify-between content-center h-8">
    <span className="block">{data.label}</span>
    <span className="bg-purple text-white text-center block rounded-full h-3 w-5">{data.options.length}</span>
  </div>
);

const MultiValueLabel = ({ children, data, ...props }) => {
  if (! data || ! ('value' in data)) {
    return (
      <components.MultiValueLabel {...props}>
        {children}
      </components.MultiValueLabel>
    );
  }

  const isTeamLabel = /team@/i.test(data.value);
  const isSourceLabel = /source@/i.test(data.value);
  const isFunctionLabel = /function@/i.test(data.value);

  const prefix = isTeamLabel
    ? 'Team: '
    : isSourceLabel
      ? 'Source: '
      : isFunctionLabel
        ? 'Function: '
        : '';

  return (
    <components.MultiValueLabel {...props} data={data}>
      {prefix}
      {children}
    </components.MultiValueLabel>
  );
};

const sortOptions = [
  { label: 'Team', value: 'team' },
  { label: 'Status', value: '_statusEnum' },
];

class Header extends React.Component {
  static propTypes = {
    numConsultantsUnavailable: PropTypes.number,
    numConsultantsAvailable: PropTypes.number,
    numConsultantsBusy: PropTypes.number,
    getSelectedFilters: PropTypes.func,
    dispatch: PropTypes.func,
    options: PropTypes.shape({
      functions: PropTypes.arrayOf(PropTypes.string),
      sources: PropTypes.arrayOf(PropTypes.string),
      teams: PropTypes.arrayOf(PropTypes.string),
    }),
  };

  // values: {label, value}[] -- current value(s) of select
  handleFilterChange = (values) => {
    const { dispatch } = this.props;

    // values will be an empty array when cleared
    dispatch(updateFilterBy(values));
  }

  handleSortChange = (values, { action }) => {
    const { dispatch } = this.props;

    if (action === 'clear') {
      dispatch(updateSortBy(null));

      return;
    }

    dispatch(updateSortBy(values));
  }

  render() {
    const {
      numConsultantsUnavailable,
      numConsultantsAvailable,
      numConsultantsBusy,
      getSelectedFilters,
      options,
    } = this.props;

    const groupOptions = [
      { label: 'Teams', options: options.teams.map(generateOptionEntry('team')) },
      { label: 'Source', options: options.sources.map(generateOptionEntry('source')) },
      { label: 'Functions', options: options.functions.map(generateOptionEntry('function')) },
    ];

    const selectedValues = [].concat(
      getSelectedFilters('teams').map(generateOptionEntry('team')),
      getSelectedFilters('functions').map(generateOptionEntry('function')),
      getSelectedFilters('sources').map(generateOptionEntry('source')),
    );


    return (
      <Wrapper className="bg-grey-lighter font-sans pt-4 pb-1">
        <ContentWrapper className="flex flex-wrap max-w-4xl mx-auto items-center">
          <FilterRowWrapper className="flex w-full py-2 items-center">
            <FilterInputColumn className="flex-grow w-4/5">
              <Select
                onSelectResetsInput={false}
                closeMenuOnSelect={false}
                formatGroupLabel={formatGroupLabel}
                placeholder="Select filter(s)..."
                isClearable
                components={{ MultiValueLabel }}
                className="w-4/5 ml-auto mr-10"
                onChange={this.handleFilterChange}
                options={groupOptions}
                isMulti
                value={selectedValues}
                theme={theme => ({
                  ...theme,
                  borderRadius: 0,
                })}
              />
            </FilterInputColumn>

            <SortbyInputColumn className="flex-grow w-1/5">
              <Select
                placeholder="Sort by"
                isSearchable={false}
                isClearable
                className="w-1/2 ml-auto"
                onChange={this.handleSortChange}
                styles={{
                  control: propvided => ({
                    ...propvided,
                    backgroundColor: '#f3f3f3',
                  }),
                }}
                options={sortOptions}
                theme={theme => ({
                  ...theme,
                  borderRadius: 0,
                })}
              />
            </SortbyInputColumn>
          </FilterRowWrapper>

          <SummaryRowWrapper className="flex w-full py-2 items-center">
            <div id="summary-wrapper" className="flex-grow w-4/5" style={{ marginRight: '22%' }}>
              <div id="summary-content" className="flex justify-between w-4/5 ml-auto mr-10">
                <SummaryIconBlock stat={numConsultantsAvailable} status="available" />
                <SummaryIconBlock stat={numConsultantsBusy} status="busy" />
                <SummaryIconBlock stat={numConsultantsUnavailable} status="unavailable" />
              </div>
            </div>
          </SummaryRowWrapper>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  numConsultantsUnavailable: getNumberOfConsultantsInUnavailableState(state),
  numConsultantsAvailable: getNumberOfConsultantsInAvailableState(state),
  numConsultantsBusy: getNumberOfConsultantsInBusyState(state),
  getSelectedFilters: makeGetFilterBy(state),
  options: getFilters(state),
});

export default connect(mapStateToProps)(Header);
