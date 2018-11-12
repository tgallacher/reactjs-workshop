/* eslint import/no-extraneous-dependencies: off, func-names: off, no-use-before-define: off */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import { beforeEach, afterEach } from 'storybook-addon-specifications/dist/preview';
import { assert } from 'chai';
import { mount } from 'enzyme';

import CenterContent from '../CenterContent';
import Component01 from '../01/01';
import Component02 from '../01/02';

// STOP!
// =====
//
// This file is not intended to be edited. This is used to
// help display and validate the work on the exercises.
//
// In general, files ending with /*.story.jsx$/i are not expected to be changed
// as part of the exercises.

// @see: All files inside './01/*' instead.
//

storiesOf('Exercises/01', module)
  .add('01 - React Element Basics', RenderExercise01)
  .add('02 - React Components', RenderExercise02);


//
// Exercise 01
//
function RenderExercise01() {
  const component = <Component01 status="available" stat={26} />;
  const story = (
    <CenterContent>
      {component}
    </CenterContent>
  );

  specs(() => describe('01 - React Element Basics', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(component);
    });

    afterEach(() => {
      if (wrapper) {
        wrapper.unmount();
        wrapper = null;
      }
    });

    it('Should render the status label', () => {
      assert.include(
        wrapper.text().toLowerCase(),
        'available',
        'The status could not be found in the component output',
      );
    });

    it('Should render the stat value', () => {
      assert.include(wrapper.text(), '26', 'The statistic value could not be found in the component output');
    });

    it('Should render one status icon', () => {
      let found = 0;

      found += wrapper.find('.fas').length;
      found += wrapper.find('.far').length;

      assert.equal(found, 1, 'Did not find one of the expected icon class names');
    });
  }));

  return story;
}

//
// Exercise 02
//
function RenderExercise02() {
  const component = <Component02 status="available" stat={92} />;
  const story = (
    <CenterContent>
      {component}
    </CenterContent>
  );

  specs(() => describe('02 - React Components', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(component);
    });

    afterEach(() => {
      if (wrapper) {
        wrapper.unmount();
        wrapper = null;
      }
    });

    it('Should render the status label using the <StatusLabel /> component', () => {
      const node = wrapper.find('StatusLabel');

      assert.lengthOf(node, 1, 'You should use the <StatusLabel /> component once');
      assert.include(
        node.text(),
        'Available',
        'The status could not be found from the <StatusLabel /> component output',
      );
    });

    it('Should render the statistic value using the <Stat /> component', () => {
      const node = wrapper.find('Stat');

      assert.lengthOf(node, 1, 'You should use the <Stat /> component once');
      assert.include(node.text(), '92', 'The statistic value could not be found from the <Stat /> component output');
    });

    it('Renders with the correct layout (approx.)', () => {
      let node = wrapper.find('Wrapper');

      assert.lengthOf(node, 1, 'Could not find the <Wrapper /> component');

      node = wrapper.find('StatusContainer');
      assert.lengthOf(node, 1, 'Could not find the <StatusContiner /> component');
    });

    it('Should render one status icon using the <StatusIcon /> component', () => {
      const node = wrapper.find('StatusIcon');

      assert.lengthOf(node, 1, 'You should use the <StatusIcon /> component for rendering the status icon');
      assert.propertyVal(
        node.props(),
        'iconClassName',
        'far fa-user',
        'The <StatusIcon /> component did not have the expected prop value',
      );
    });
  }));

  return story;
}
