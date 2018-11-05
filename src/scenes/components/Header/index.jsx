import React from 'react';
import styled from 'react-emotion';
import Select, { components } from 'react-select';
import { connect } from 'react-redux';

import SummaryIconBlock from './SummaryBlock';
import { generateOptionEntry } from './utils';
import {
  getNumberOfConsultantsInUnavailableState,
  getNumberOfConsultantsInAvailableState,
  getNumberOfConsultantsInBusyState,
} from '../../../consultants/selectors';
import {
  getFilters,
  makeGetFilterBy,
} from '../../../ui/selectors';
import {
  updateFilterBy,
} from '../../../ui/ducks';

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

const MultiValueLabel = ({ children, ...props }) => {
  if( ! ('data' in props) || ! ('value' in props.data)) {
    return <components.MultiValueLabel {...props} children={children} />;
  }

  const isTeamLabel = /team@/i.test(props.data.value);
  const isSourceLabel = /source@/i.test(props.data.value);
  const isFunctionLabel = /function@/i.test(props.data.value);

  let prefix = isTeamLabel
    ? 'Team: '
    : isSourceLabel
      ? 'Source: '
      : isFunctionLabel
        ? 'Function: '
        : '';

  return (
    <components.MultiValueLabel {...props}>
     {prefix}{children}
    </components.MultiValueLabel>
  );
};

const sortOptions = [
  { label: 'Team', value: 'team' },
  { label: 'Status', value: 'status' },
]

class Header extends React.Component {

  // values: {label, value}[] -- current value(s) of select
  handleFilterChange = (values) => {
    this.props.dispatch(updateFilterBy(values));
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
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                })}
              />
            </FilterInputColumn>

            <SortbyInputColumn className="flex-grow w-1/5">
              <Select
                placeholder="Sort by"
                isClearable
                className="w-1/2 ml-auto"
                tabIndex="1"
                styles={{
                  control: (propvided) => ({
                    ...propvided,
                    backgroundColor: '#f3f3f3',
                  }),
                }}
                options={sortOptions}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                })}
              />
            </SortbyInputColumn>
          </FilterRowWrapper>

          <SummaryRowWrapper className="flex w-full py-2 items-center">
            <div id="summary-wrapper" className="flex-grow w-4/5" style={{marginRight: '22%'}}>
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
})

export default connect(mapStateToProps)(Header);
