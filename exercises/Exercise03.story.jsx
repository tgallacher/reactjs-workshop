 /* eslint import/no-extraneous-dependencies: off, func-names: off, no-use-before-define: off */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import { beforeEach } from 'storybook-addon-specifications/dist/preview';
import { assert } from 'chai';
import { mount } from 'enzyme';

import CenterContent from './CenterContent';
import Exercise01 from './03/01';

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
  .add('01', RenderExercise01);

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

  specs(() => describe('Exercise 03/01', () => {
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
        'Expected the `functions` prop to be rendered as a comma-separated list inside the `functions` data column'
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
