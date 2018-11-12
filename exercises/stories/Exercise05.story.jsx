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
import Exercise01 from '../05/01';

// STOP!
// =====
//
// This file is not intended to be edited. This is used to
// help display and validate the work on the exercises.
//
// In general, files ending with /*.story.jsx$/i are not expected to be changed
// as part of the exercises.
//
// @see: All files inside './05/*' instead.
//

storiesOf('Exercises/05', module)
  .add('01 - CSS-in-JS (DataTableRow)', renderExercise01);

//
// Exercise 01
//
function renderExercise01() {
  const rowData = [
    { team: 'Gryffindor', status: 'available', name: 'Harry potter', functions: ['Wizzard', 'Hero'], sources: ['Hogwarts'] },
    { team: 'Gryffindor', status: 'available', name: 'Ron Weasley', functions: ['Wizzard', 'Side-kick'], sources: ['Hogwarts'] },
    { team: 'Gryffindor', status: 'unavailable', name: 'Hermione Granger', functions: ['Wizzard'], sources: ['Hogwarts'] },
    { team: 'Solo', status: 'busy', name: 'Bruce Wayne', functions: ['Hero', 'Villian'], sources: ['Gotham'] },
    { team: 'Solo', status: 'unavailable', name: 'Richard Grayson', functions: ['Hero', 'Villian'], sources: ['Gotham'] },
    { team: 'Amazon', status: 'busy', name: 'Diana', functions: ['Hero', 'Princess', 'Warrior'], sources: [] },
    { team: undefined, status: 'busy', name: 'Joe Blogg', functions: [], sources: ['Generalist'] },
    { team: 'People', status: 'available', name: undefined, functions: ['Professional'], sources: ['Hell\'s Kitchen'] },
  ];

  const component = <Exercise01 data={rowData} />;
  const story = (
    <CenterContent>
      {component}
    </CenterContent>
  );

  specs(() => describe('01 - CSS-in-JS (DataTableRow)', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(component);
    });

    // Attendees are free to chose their own implementation approach using EmotionJS API
    // Too many DoF to account for; not worth the ROI
    it('Styling is not verified by automated tests. Please get a manual ✅ from me', () => {
      assert.notInclude(wrapper.text(), 'Start HERE!', 'This exercise doesn\'t appear to have been started yet');
    });

    it('Adheres to ReactJS guidelines for generating repeating UI elements', () => {
      const dataRows = wrapper.find(DataRow);

      // We have keys defined at least
      dataRows.forEach(node => { // eslint-disable-line
        assert.isNull(node.key(), 'The `DataRow` component should not have a key prop');
        assert.isDefined(node.parent().key(), 'The `DataRow` Wrapper component should have a key prop');
      });

      // The keys are unique
      const keys = dataRows.map(node => node.parent().key());
      const uniqKeys = [...new Set(keys)];

      assert.equal(uniqKeys.length, rowData.length, 'Each key should be unique within the list');
    });
  }));

  return story;
}
