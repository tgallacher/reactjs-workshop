/* eslint import/no-extraneous-dependencies: off, func-names: off, no-use-before-define: off */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import { beforeEach } from 'storybook-addon-specifications/dist/preview';
import { assert } from 'chai';
import { mount } from 'enzyme';

import StatusContainer from 'scenes/components/Header/SummaryBlock/StatusContainer';
import StatusLabel from 'scenes/components/Header/SummaryBlock/StatusLabel';
import StatusIcon from 'scenes/components/Header/SummaryBlock/StatusIcon';
import Wrapper from 'scenes/components/Header/SummaryBlock/Wrapper';
import Stat from 'scenes/components/Header/SummaryBlock/Stat';

import CenterContent from './CenterContent';
import Component01 from './01/01';
import Component02 from './01/02';

// STOP!
// =====
//
// These files are not intended to be edited. These are used to
// help display and validate the work on the exercies.
//
// See the files inside './01/*' instead.
// The files you are interested should not end /*.story.jsx$/i
//

storiesOf('Exercises/01', module)
  .add('01', RenderExercise01)
  .add('02', RenderExercise02);


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

  specs(() => describe('Exercise 01-01', () => {
    let output;

    beforeEach(() => {
      output = mount(component);
    });

    it('Should render the status label', () => {
      assert.include(
        output.text(),
        'Available',
        'The status could not be found in the component output',
      );
    });

    it('Should render the stat value', () => {
      assert.include(output.text(), '26', 'The statistic value could not be found in the component output');
    });

    it('Should render one status icon', () => {
      let found = 0;

      found += output.find('.fas').length;
      found += output.find('.far').length;

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

  specs(() => describe('Exercise 01-02', () => {
    let output;

    beforeEach(() => {
      output = mount(component);
    });

    it('Should render the status label using the <StatusLabel /> component', () => {
      const node = output.find(StatusLabel);

      assert.equal(node.length, 1, 'You should use the <StatusLabel /> component once');
      assert.include(
        node.text(),
        'Available',
        'The status could not be found from the <StatusLabel /> component output',
      );
    });

    it('Should render the statistic value using the <Stat /> component', () => {
      const node = output.find(Stat);

      assert.equal(node.length, 1, 'You should use the <Stat /> component once');
      assert.include(node.text(), '92', 'The statistic value could not be found from the <Stat /> component output');
    });

    it('Renders with the correct layout (approx.)', () => {
      let node = output.find(Wrapper);

      assert.equal(node.length, 1, 'Could not find the <Wrapper /> component');

      node = output.find(StatusContainer);
      assert.equal(node.length, 1, 'Could not find the <StatusContiner /> component');
    });

    it('Should render one status icon using the <StatusIcon /> component', () => {
      const node = output.find(StatusIcon);

      assert.equal(node.length, 1, 'You should use the <StatusIcon /> component for rendering the status icon');
      const props = node.props();

      assert.propertyVal(
        props,
        'iconClassName',
        'far fa-user',
        'The <StatusIcon /> component did not have the expected prop value',
      );
    });
  }));

  return story;
}
