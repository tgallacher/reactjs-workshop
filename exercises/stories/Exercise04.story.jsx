/* eslint
  import/no-extraneous-dependencies: off,
  no-use-before-define: off,
  object-curly-newline: off,
  func-names: off,
  max-len: off,
*/
import React from 'react';
import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import { beforeEach } from 'storybook-addon-specifications/dist/preview';
import { assert } from 'chai';
import { mount } from 'enzyme';

import DataRow from '../03/02';

import CenterContent from '../CenterContent';
import Exercise01 from '../04/01';

// STOP!
// =====
//
// This file is not intended to be edited. This is used to
// help display and validate the work on the exercises.
//
// In general, files ending with /*.story.jsx$/i are not expected to be changed
// as part of the exercises.
//
// @see: All files inside './04/*' instead.
//

storiesOf('Exercises/04', module)
  .add('01 - Lists: Towards the DataTableRow', renderExercise01);

// Export as we will use it in a later exercise
export const rowData = [ // eslint-disable-line
  { team: 'Gryffindor', status: 'available', name: 'Harry potter', functions: ['Wizzard', 'Hero'], sources: ['Hogwarts'] },
  { team: 'Gryffindor', status: 'available', name: 'Ron Weasley', functions: ['Wizzard', 'Side-kick'], sources: ['Hogwarts'] },
  { team: 'Gryffindor', status: 'unavailable', name: 'Hermione Granger', functions: ['Wizzard'], sources: ['Hogwarts'] },
  { team: 'Solo', status: 'busy', name: 'Bruce Wayne', functions: ['Hero', 'Villian'], sources: ['Gotham'] },
  { team: 'Solo', status: 'unavailable', name: 'Richard Grayson', functions: ['Hero', 'Villian'], sources: ['Gotham'] },
  { team: 'Amazon', status: 'busy', name: 'Diana', functions: ['Hero', 'Princess', 'Warrior'], sources: [] },
  { team: undefined, status: 'busy', name: 'Joe Blogg', functions: [], sources: ['Generalist'] },
  { team: 'People', status: 'available', name: undefined, functions: ['Professional'], sources: ['Hell\'s Kitchen'] },
];

//
// Exercise 01
//
function renderExercise01() {
  const component = <Exercise01 data={rowData} />;
  const story = (
    <CenterContent>
      {component}
    </CenterContent>
  );

  specs(() => describe('Exercise 04/01', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(component);
    });

    it('Renders "No data to display" when the `data` prop is absent', () => {
      wrapper.setProps({ data: undefined });

      assert.include(wrapper.text(), 'No data to display');
    });

    it('Renders "No data to display" when the `data` prop is an empty array', () => {
      wrapper.setProps({ data: [] });

      assert.include(wrapper.text(), 'No data to display');
    });

    it('Adheres to ReactJS guidelines for generating repeating UI elements', () => {
      const dataRows = wrapper.find(DataRow);

      // We have keys defined at least
      dataRows.forEach(node => assert.isDefined(node.key()));

      // The keys are unique
      const keys = dataRows.map(node => node.key());
      const uniqKeys = [...new Set(keys)];

      assert.equal(uniqKeys.length, rowData.length, 'Each key should be unique within the list');
    });

    it('Renders a `DataRow` component for each entry in the data prop', () => {
      const dataRows = wrapper.find(DataRow);

      assert.equal(dataRows.length, rowData.length);
    });

    it('Renders a `DataTableHeading` component as the table header', () => {
      assert.lengthOf(wrapper.find('DataTableHeading'), 1);
    });

    // Sorting, or changing the order of the data is not part of this test.
    // And we need things to be in the same order for the next test
    it('Does not change the order of the input data', () => {
      const dataRows = wrapper.find(DataRow);

      rowData.map((data, idx) => { // eslint-disable-line
        assert.lengthOf(
          dataRows.at(idx).find('#status'),
          1,
          'As before, the status node should be rendered inside a `DataRow` with id = status',
        );

        assert.equal(dataRows.at(idx).find('#status').text(), data.status);
      });
    });

    // We won't perform the same extensive checks as in the previous example. We'll just run a few to confirm
    it('Handles each row display as before, by supporting the same branching/edges in the input data', () => {
      const dataRows = wrapper.find(DataRow);

      //
      // name: undefined
      //
      const nameIdx = rowData.findIndex(d => d.name === undefined);

      if (nameIdx === -1) {
        throw new Error('Story Error: Expected the mock data to include 1 element whose `name` key was undefined');
      }

      // FIXME: We're strongly coupling the expected value across tests...; ok for now
      assert.include(dataRows.at(nameIdx).text(), 'Unknown Consultant');

      //
      // team: undefined
      //
      const teamIdx = rowData.findIndex(d => d.team === undefined);

      if (teamIdx === -1) {
        throw new Error('Story Error: Expected the mock data to include 1 element whose `team` key was undefined');
      }

      // FIXME: We're strongly coupling the expected value across tests...; ok for now
      assert.include(dataRows.at(teamIdx).text(), 'Unknown Team');

      //
      // sources: empty array
      //
      const sourcesIdx = rowData.findIndex(d => ! d.sources || d.sources.length === 0);

      if (sourcesIdx === -1) {
        throw new Error('Story Error: Expected the mock data to include 1 element whose `sources` key was undefined');
      }

      // FIXME: We're strongly coupling the expected value across tests...; ok for now
      assert.include(dataRows.at(sourcesIdx).text(), '-');

      //
      // functions: empty array
      //
      const fnsIdx = rowData.findIndex(d => ! d.functions || d.functions.length === 0);

      if (fnsIdx === -1) {
        throw new Error('Story Error: Expected the mock data to include 1 element whose `sources` key was undefined');
      }

      // FIXME: We're strongly coupling the expected value across tests...; ok for now
      assert.include(dataRows.at(fnsIdx).text(), '-');
    });
  }));

  return story;
}
