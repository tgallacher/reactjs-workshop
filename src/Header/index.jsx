import React from 'react';
import styled from 'react-emotion';
import Select, { components } from 'react-select';

import SummaryIconBlock from './SummaryBlock';

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

const Header = ({ options }) => {
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
              options={options}
              isMulti
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
                <SummaryIconBlock stat="45" status="Ready" />
                <SummaryIconBlock stat="16" status="On Call" />
                <SummaryIconBlock stat="75" status="Meeting" />
              </div>
          </div>
        </SummaryRowWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};


export default Header;
