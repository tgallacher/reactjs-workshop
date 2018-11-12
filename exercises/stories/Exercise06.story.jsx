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
import { css, cx } from 'emotion';

import CenterContent from '../CenterContent';
import Exercise01, { App as Exercise01RawComponent } from '../06/01';

// STOP!
// =====
//
// This file is not intended to be edited. This is used to
// help display and validate the work on the exercises.
//
// In general, files ending with /*.story.jsx$/i are not expected to be changed
// as part of the exercises.
//
// @see: All files inside '../06/*' instead.
//

storiesOf('Exercises/06', module)
  .add('01 - HOCs', renderExercise01);

//
// Exercise 01
//
function renderExercise01() {
  const component = <Exercise01 />;
  const story = (
    <CenterContent>
      <div className={cx('border border-purple border-dashed', css`& > div { padding: 4em; }`)}>
        {component}
      </div>
    </CenterContent>
  );

  specs(() => describe('01 - HOCs', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(component);
    });

    it('Defaults the mouse coords to (0,0)', () => {
      assert.include(wrapper.text().replace(/\s/g, ''), '(0,0)');
    });

    it('Accepts a mouse prop and renders the correct mouse (X,Y) coords when not wrapped by the HOC', () => {
      const x = 123;
      const y = 345;

      const wrapperForNonHOC = mount(<Exercise01RawComponent mouse={{ x, y }} />);

      assert.include(wrapperForNonHOC.text().replace(/\s/g, ''), `(${x},${y})`);
    });

    it('Continually re-renders the correct mouse (X,Y) coords after a mouse move event when wrapped by the HOC', () => {
      const events = [
        { x: 123, y: 234 },
        { x: 283, y: 463 },
        { x: 837, y: 2 },
      ];

      events.forEach(({ x, y }) => {
        wrapper.simulate('mousemove', { clientX: x, clientY: y });

        assert.include(wrapper.text().replace(/\s/g, ''), `(${x},${y})`);
      });
    });
  }));

  return story;
}
