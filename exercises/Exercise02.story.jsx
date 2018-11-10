/* eslint import/no-extraneous-dependencies: off, func-names: off, no-use-before-define: off */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import { beforeEach } from 'storybook-addon-specifications/dist/preview';
import { assert } from 'chai';
import { mount } from 'enzyme';

import CenterContent from './CenterContent';
import Exercise01 from './02/01';
import Exercise02 from './02/02';


// STOP!
// =====
//
// This file is not intended to be edited. This is used to
// help display and validate the work on the exercises.
//
// In general, files ending with /*.story.jsx$/i are not expected to be changed
// as part of the exercises.

// @see: All files inside './02/*' instead.
//

storiesOf('Exercises/02', module)
  .add('01', RenderExercise01)
  .add('02', RenderExercise02);



function runExerciseSpecsWithDefaultSpecs(component, additionalSpecs) {
  specs(() => describe('Exercise 02-01', () => {
    let mounted;

    beforeEach(() => {
      mounted = mount(component);
    });

    it('Should render an input element', () => {
      const node = mounted.find('input');

      assert.equal(node.length, 1, 'Could not find an <input /> element');
    });

    it('Should initialise state to an empty string', () => {
      const state = mounted.state();

      assert.property(state, 'team', 'Expected the state to contain the key, "team"');
      assert.strictEqual(state.team, '', 'Expected the default state for "team" to be an empty string');
    });

    it('Should render the team name from state', () => {
      const team = 'foobar';

      mounted.setState({ team });

      assert.notInclude(
        mounted.find('input').text(), team,
        'Did not expect the input element to be a "controlled" component',
      );

      assert.include(mounted.text(), team, 'Expected the value in state to be part of the component\'s output');

      // reset
      mounted.setState({ team: '' });
    });

    it('Should update the team name when the input value changes', () => {
      const input = mounted.find('input');

      if (input.length === 0) {
        throw new Error('could not find input in component output; test failed to continue');
      }

      input.simulate('change', { target: { value: 'foo' } });
      assert.strictEqual(mounted.state().team, 'foo', 'Expected the "team" key in state to have been updated');
    });

    if (additionalSpecs !== undefined) {
      additionalSpecs();
    }
  }));
}

//
// Exercise 01
//
function RenderExercise01() {
  const component = <Exercise01 />;
  const story = (
    <CenterContent>
      {component}
    </CenterContent>
  );

  runExerciseSpecsWithDefaultSpecs(component);

  return story;
}

//
// Exercise 02
//
function RenderExercise02() {
  const component = <Exercise02 />;
  const story = (
    <CenterContent>
      {component}
    </CenterContent>
  );

  runExerciseSpecsWithDefaultSpecs(component, () => {
    it('Renders the input component as a controlled component', () => {
      const mounted = mount(component);
      const team = 'foobar';

      mounted.setState({ team });

      assert.include(
        mounted.find('input').prop('value'), team,
        'Expected the input element to be a "controlled" component',
      );

      // reset
      mounted.setState({ team: '' });
    });
  });

  return story;
}
