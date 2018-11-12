/* eslint
  import/no-extraneous-dependencies: off,
  no-use-before-define: off,
  func-names: off,
*/
import React from 'react';
import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import { beforeEach } from 'storybook-addon-specifications/dist/preview';
import { assert } from 'chai';
import { mount } from 'enzyme';

import CenterContent from '../CenterContent';
import Exercise01 from '../03/01';
import Exercise02 from '../03/02';

// STOP!
// =====
//
// This file is not intended to be edited. This is used to
// help display and validate the work on the exercises.
//
// In general, files ending with /*.story.jsx$/i are not expected to be changed
// as part of the exercises.

// @see: All files inside './03/*' instead.
//

storiesOf('Exercises/03', module)
  .add('01 - Conditional rendering', RenderExercise01)
  .add('02 - Begin the DataTableRow', RenderExercise02);

//
// Exercise 01
//
function RenderExercise01() {
  const teamName = 'Apollo express';
  const functions = [
    'Renewals',
    'Tc Sales',
    'Superstar',
  ];

  const component = <Exercise01 team={teamName} functions={functions} />;
  const story = (
    <CenterContent>
      {component}
    </CenterContent>
  );

  specs(() => describe('01 - Conditional rendering', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(component);
    });

    it('Renders a `DataColumn` with an id of `team`', () => {
      const teamDataColumn = wrapper.find('DataRowColumn#team');

      assert.equal(teamDataColumn.length, 1, 'Expected to find 1 `DataColumn` with an id of `team`');
    });

    it('Renders the `team` prop inside the correct `DataColumn`', () => {
      const teamDataColumn = wrapper.find('DataRowColumn#team');

      assert.include(
        teamDataColumn.text(),
        teamName,
        'Expected the team prop to be rendered inside the team data column',
      );
    });

    it('Renders "Unknown Team" inside the correct `DataColumn` when the `team` prop is missing', () => {
      wrapper.setProps({ team: undefined });

      const teamDataColumn = wrapper.find('DataRowColumn#team');

      assert.include(
        teamDataColumn.text(),
        'Unknown Team',
        'Expected the team data column to revert to the default text when the prop is absent',
      );
    });

    it('Renders a `DataColumn` with an id of `functions`', () => {
      const functionsDataColumn = wrapper.find('DataRowColumn#functions');

      assert.equal(functionsDataColumn.length, 1, 'Expected to find 1 `DataColumn` with an id of `functions`');
    });

    it('Renders the `functions` prop as a comma-separated list inside the correct `DataColumn`', () => {
      const functionsDataColumn = wrapper.find('DataRowColumn#functions');

      assert.include(
        functionsDataColumn.text(),
        functions.join(', '),
        'Expected the `functions` prop to be rendered as a comma-separated list inside the `functions` data column',
      );
    });

    it('Renders "-" inside the correct `DataColumn` when the `functions` prop is missing', () => {
      wrapper.setProps({ functions: undefined });

      const functionsDataColumn = wrapper.find('DataRowColumn#functions');

      assert.include(
        functionsDataColumn.text(),
        '-',
        'Expected the functions data column to revert to the default text when the prop is absent',
      );
    });

    it('Renders "-" inside the correct `DataColumn` when the `functions` prop is an empty array', () => {
      wrapper.setProps({ functions: [] });

      const functionsDataColumn = wrapper.find('DataRowColumn#functions');

      assert.include(
        functionsDataColumn.text(),
        '-',
      );
    });

    it('Does not render anything if both `team` and `functions` props are missing', () => {
      wrapper.setProps({ functions: undefined, team: undefined });

      assert.equal(
        wrapper.text(),
        null,
      );
    });
  }));

  return story;
}

//
// Exercise 02
// FIXME: Duplicate spec code; mvp and all that
function RenderExercise02() {
  const teamName = 'E. Nigma';
  const functions = [
    'Superstar',
    'Renewals',
    'Helper',
  ];
  const sources = [
    'Inbound',
    'Outbound',
  ];
  const status = 'busy';
  const name = 'Bruce Wayne';

  const component = (
    <Exercise02
      functions={functions}
      sources={sources}
      status={status}
      team={teamName}
      name={name}
    />
  );

  specs(() => describe('02 - Begin the DataTableRow', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(component);
    });

    // prop: team
    it('Renders a `DataColumn` with an id of `team`', () => {
      const dataColumn = wrapper.find('DataRowColumn#team');

      assert.equal(dataColumn.length, 1, 'Expected to find 1 `DataColumn` with an id of `team`');
    });

    it('Renders the `team` prop inside the correct `DataColumn`', () => {
      const dataColumn = wrapper.find('DataRowColumn#team');

      assert.include(
        dataColumn.text(),
        teamName,
        'Expected the team prop to be rendered inside the team data column',
      );
    });

    it('Renders "Unknown Team" inside the correct `DataColumn` when the `team` prop is missing', () => {
      wrapper.setProps({ team: undefined });

      const dataColumn = wrapper.find('DataRowColumn#team');

      assert.include(
        dataColumn.text(),
        'Unknown Team',
        'Expected the team data column to revert to the default text when the prop is absent',
      );
    });

    // prop: functions
    it('Renders a `DataColumn` with an id of `functions`', () => {
      const dataColumn = wrapper.find('DataRowColumn#functions');

      assert.equal(dataColumn.length, 1, 'Expected to find 1 `DataColumn` with an id of `functions`');
    });

    it('Renders the `functions` prop as a comma-separated list inside the correct `DataColumn`', () => {
      const dataColumn = wrapper.find('DataRowColumn#functions');

      assert.include(
        dataColumn.text(),
        functions.join(', '),
        'Expected the `functions` prop to be rendered as a comma-separated list inside the `functions` data column',
      );
    });

    it('Renders "-" inside the correct `DataColumn` when the `functions` prop is missing', () => {
      wrapper.setProps({ functions: undefined });

      const dataColumn = wrapper.find('DataRowColumn#functions');

      assert.include(
        dataColumn.text(),
        '-',
        'Expected the functions data column to revert to the default text when the prop is absent',
      );
    });

    it('Renders "-" inside the correct `DataColumn` when the `functions` prop is an empty array', () => {
      wrapper.setProps({ functions: [] });

      const dataColumn = wrapper.find('DataRowColumn#functions');

      assert.include(
        dataColumn.text(),
        '-',
      );
    });

    // prop: sources
    it('Renders a `DataColumn` with an id of `sources`', () => {
      const dataColumn = wrapper.find('DataRowColumn#sources');

      assert.equal(dataColumn.length, 1, 'Expected to find 1 `DataColumn` with an id of `sources`');
    });

    it('Renders the `sources` prop as a comma-separated list inside the correct `DataColumn`', () => {
      const dataColumn = wrapper.find('DataRowColumn#sources');

      assert.include(
        dataColumn.text(),
        sources.join(', '),
        'Expected the `sources` prop to be rendered as a comma-separated list inside the `sources` data column',
      );
    });

    it('Renders "-" inside the correct `DataColumn` when the `sources` prop is missing', () => {
      wrapper.setProps({ sources: undefined });

      const dataColumn = wrapper.find('DataRowColumn#sources');

      assert.include(
        dataColumn.text(),
        '-',
        'Expected the sources data column to revert to the default text when the prop is absent',
      );
    });

    it('Renders "-" inside the correct `DataColumn` when the `sources` prop is an empty array', () => {
      wrapper.setProps({ sources: [] });

      const dataColumn = wrapper.find('DataRowColumn#sources');

      assert.include(
        dataColumn.text(),
        '-',
      );
    });

    // prop: name
    it('Renders a `DataColumn` with an id of `name`', () => {
      const dataColumn = wrapper.find('DataRowColumn#name');

      assert.equal(dataColumn.length, 1, 'Expected to find 1 `DataColumn` with an id of `name`');
    });

    it('Renders the `name` prop inside the correct `DataColumn`', () => {
      const dataColumn = wrapper.find('DataRowColumn#name');

      assert.include(
        dataColumn.text(),
        name,
        'Expected the name prop to be rendered inside the name data column',
      );
    });

    it('Renders "Unknown Consultant" inside the correct `DataColumn` when the `name` prop is missing', () => {
      wrapper.setProps({ name: undefined });

      const dataColumn = wrapper.find('DataRowColumn#name');

      assert.include(
        dataColumn.text(),
        'Unknown Consultant',
        'Expected the name data column to revert to the default text when the prop is absent',
      );
    });

    // prop: status
    it('Renders a `DataColumn` with an id of `status`', () => {
      const dataColumn = wrapper.find('DataRowColumn#status');

      assert.equal(dataColumn.length, 1, 'Expected to find 1 `DataColumn` with an id of `status`');
    });

    it('Renders the `status` prop inside the correct `DataColumn`', () => {
      const dataColumn = wrapper.find('DataRowColumn#status');

      assert.include(
        dataColumn.text(),
        status,
        'Expected the status prop to be rendered inside the status data column',
      );
    });

    it('Renders "Unknown Status" inside the correct `DataColumn` when the `status` prop is missing', () => {
      wrapper.setProps({ status: undefined });

      const dataColumn = wrapper.find('DataRowColumn#status');

      assert.include(
        dataColumn.text(),
        'Unknown Status',
        'Expected the status data column to revert to the default text when the prop is absent',
      );
    });

    // Column order
    it('Renders the data columns in the correct order', () => {
      // const wrap = shallow(component);
      const dataColumns = wrapper.find('DataRowColumn');
      const expectedOrder = [
        'name',
        'team',
        'functions',
        'sources',
        'status',
      ];

      assert.lengthOf(dataColumns, expectedOrder.length, 'Did not find the expected number of data columns');
      expectedOrder.map((colId, index) => { // eslint-disable-line
        assert.equal(dataColumns.at(index).prop('id'), colId);
      });
    });
  }));

  const story = (
    <CenterContent>
      {component}
    </CenterContent>
  );


  return story;
}
