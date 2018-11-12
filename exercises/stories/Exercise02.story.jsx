/* eslint import/no-extraneous-dependencies: off, func-names: off, no-use-before-define: off */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import { beforeEach, afterEach } from 'storybook-addon-specifications/dist/preview';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import CenterContent from '../CenterContent';
import Exercise01 from '../02/01';
import Exercise02 from '../02/02';
import Exercise03 from '../02/03';


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
  .add('01 - State & Event handling', RenderExercise01)
  .add('02 - Controlled Components', RenderExercise02)
  .add('03 - Lifecycle methods', RenderExercise03);


// Run exercise specs which are shared between exercises.
function runExerciseSpecsWithDefaultSpecs(component, exerciseName, additionalSpecs) {
  specs(() => describe(exerciseName, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(component);
    });

    it('Should render an input element', () => {
      const node = wrapper.find('input');

      assert.equal(node.length, 1, 'Could not find an <input /> element');
    });

    it('Should initialise state to an empty string', () => {
      const state = wrapper.state();

      assert.property(state, 'team', 'Expected the state to contain the key, "team"');
      assert.strictEqual(state.team, '', 'Expected the default state for "team" to be an empty string');
    });

    it('Should render the team name from state', () => {
      const team = 'foobar';

      wrapper.setState({ team });

      assert.notInclude(
        wrapper.find('input').text(), team,
        'Did not expect the input element to be a "controlled" component',
      );

      assert.include(wrapper.text(), team, 'Expected the value in state to be part of the component\'s output');

      // reset
      wrapper.setState({ team: '' });
    });

    it('Should update the team name when the input value changes', () => {
      const input = wrapper.find('input');

      if (input.length === 0) {
        throw new Error('could not find input in component output; test failed to continue');
      }

      input.simulate('change', { target: { value: 'foo' } });
      assert.strictEqual(
        wrapper.state().team,
        'foo',
        'Expected the "team" key in state to have been updated; possibly check your choice of DOM event handler',
      );
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

  runExerciseSpecsWithDefaultSpecs(component, '01 - State & Event handling');

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

  runExerciseSpecsWithDefaultSpecs(component, '02-02', () => {
    it('Renders the input component as a controlled component', () => {
      const wrapper = mount(component);
      const team = 'foobar';

      wrapper.setState({ team });

      assert.include(
        wrapper.find('input').prop('value'), team,
        'Expected the input element to be a "controlled" component',
      );

      // reset
      wrapper.setState({ team: '' });
    });
  });

  return story;
}

//
// Exercise 02
//
function RenderExercise03() {
  const component = <Exercise03 />;
  const story = (
    <CenterContent>
      {component}
    </CenterContent>
  );

  specs(() => describe('03 - Lifecycle methods', () => {
    let wrapper;

    beforeEach(() => {
      if ('componentDidMount' in Exercise03.prototype) {
        sinon.spy(Exercise03.prototype, 'componentDidMount');
      }
      if ('componentWillUnmount' in Exercise03.prototype) {
        sinon.spy(Exercise03.prototype, 'componentWillUnmount');
      }

      sinon.spy(global, 'setInterval');
      sinon.spy(global, 'clearInterval');

      wrapper = mount(component);
    });

    afterEach(() => {
      // if ('componentDidMount' in Exercise03.prototype) {
      //   Exercise03.prototype.componentDidMount.restore();
      // }
      // if ('componentWillUnmount' in Exercise03.prototype) {
      //   Exercise03.prototype.componentWillUnmount.restore();
      // }

      // global.setInterval.restore();
      // global.clearInterval.restore();

      if (wrapper && wrapper.length > 0) {
        wrapper.unmount();

        wrapper = null;
      }
      sinon.restore();
    });

    it('Implements mount lifecycle method and it is executed', () => {
      assert.propertyVal(
        Exercise03.prototype.componentDidMount,
        'callCount',
        1,
        'Expected componentDidMount to be called',
      );
    });

    it('Implements a setInterval call', () => {
      assert.propertyVal(setInterval, 'callCount', 1, 'No timer interval found');
    });

    it('Implements a unmount lifecycle method and it is executed', () => {
      wrapper.unmount();
      assert.propertyVal(
        Exercise03.prototype.componentWillUnmount,
        'callCount',
        1,
        'Expected componentWillUnmount to be called',
      );
    });

    it('Clears the timer interval to preserve memory leakage', () => {
      wrapper.unmount();
      assert.propertyVal(clearInterval, 'callCount', 1, 'No clear timer interval found');
    });

    it('Stores the date timestamp inside the component\'s state as a JS Date object', () => {
      assert(wrapper.state().timestamp instanceof Date, 'Instance of Date');
    });

    it('Accepts an optional datetimestamp prop to use as the intiial timestamp', () => {
      const date = new Date();

      date.setHours(18, 20, 0, 0);

      const wrapper = mount(<Exercise03 datetimestamp={date.getTime()} />, {
        disableLifecycleMethods: true,
      });

      assert.equal(
        wrapper.state().timestamp.getTime(),
        date.getTime(),
        'State initialisation should come from props when available',
      );
    });

    it('Renders the live time on the screen in locale format', () => {
      const wrapper = mount(<Exercise03 />, {
        disableLifecycleMethods: true,
      });

      assert.include(wrapper.text(), wrapper.state().timestamp.toLocaleTimeString());
    });
  }));

  return story;
}
