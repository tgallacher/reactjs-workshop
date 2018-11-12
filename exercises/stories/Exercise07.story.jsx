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
import { beforeEach, afterEach } from 'storybook-addon-specifications/dist/preview';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import CenterContent from '../CenterContent';
import Exercise01, { MousePosition } from '../07/01';

// STOP!
// =====
//
// This file is not intended to be edited. This is used to
// help display and validate the work on the exercises.
//
// In general, files ending with /*.story.jsx$/i are not expected to be changed
// as part of the exercises.
//
// @see: All files inside '../07/*' instead.
//

storiesOf('Exercises/07', module)
  .add('01 - Render props', renderExercise01);

//
// Exercise 01
//
function renderExercise01() {
  const component = <Exercise01 />;
  const story = (
    <CenterContent>
      <div className="border border-purple border-dashed">
        {component}
      </div>
    </CenterContent>
  );

  specs(() => describe('01 - Render props', () => {
    let renderPropFn;
    let wrapper;
    let mpWrapper;

    beforeEach(() => {
      renderPropFn = sinon.fake();

      wrapper = mount(component);
      mpWrapper = mount(<MousePosition>{renderPropFn}</MousePosition>);
    });

    afterEach(() => {
      sinon.restore();

      if (wrapper) {
        wrapper.unmount();

        wrapper = null;
      }
    });

    //
    // MousePosition
    //
    it('MousePosition: calls the render prop with 1 arg', () => {
      assert.lengthOf(renderPropFn.lastCall.args, 1, 'Expected render prop to be called with 1 arg');
    });

    it('MousePosition: calls the render prop with an object containg the keys x, y', () => {
      assert.property(renderPropFn.lastCall.lastArg, 'x');
      assert.property(renderPropFn.lastCall.lastArg, 'y');
    });

    it('MousePosition: Defaults the mouse coords to (0,0)', () => {
      const rpFn = renderPropFn.lastCall;
      const expected = { x: 0, y: 0 };

      assert.isObject(rpFn.lastArg, 'Expected render prop to be called with an object');
      assert.deepEqual(renderPropFn.lastCall.lastArg, expected, 'Expected render porp defalut mouse to (0,0)');
    });

    // Slight duplication with below; but here we are testing the MousePosition component
    // updates, and outputs the change. Later, we are testing that the component updates the display to the change.
    it('MousePosition: handles and propagates mouse events', () => {
      const x = 12;
      const y = 982;
      const expected = { x, y };

      mpWrapper.simulate('mousemove', { clientX: x, clientY: y });
      assert.deepEqual(renderPropFn.lastCall.lastArg, expected, 'Expected render prop to have updated due to mouse event');
    });

    //
    // APP
    //
    it('App: Includes the `MousePosition` component', () => {
      assert.lengthOf(
        wrapper.find('MousePosition'),
        1,
        'Expected to find a single use of the `MousePosition` component',
      );
    });

    it('App: Does not use a `mouse` prop', () => {
      const x = 123;
      const y = 345;

      wrapper.setProps({ mouse: { x, y } });

      assert.notInclude(wrapper.text().replace(/\s/g, ''), `(${x},${y})`);
      assert.notInclude(wrapper.text(), 'Start HERE!', 'Appears the component hasn\'t been edited yet');
    });

    // Slight duplication with above; but here we are testing that the component updates the
    // display to the change. Above, we are testing the MousePosition component updates, and
    // outputs the change.
    it('App: Continually re-renders the correct mouse (X,Y) coords', () => {
      const events = [
        { x: 123, y: 234 },
        { x: 283, y: 463 },
        { x: 837, y: 2 },
      ];

      events.forEach(({ x, y }) => {
        wrapper.find('MousePosition').simulate('mousemove', { clientX: x, clientY: y });

        assert.include(wrapper.text().replace(/\s/g, ''), `(${x},${y})`);
      });
    });
  }));

  return story;
}
