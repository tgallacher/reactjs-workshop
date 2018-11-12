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
import Exercise01, { ActiveContext } from '../08/01';
import ListItem from '../08/components/01-ListItemComponent';
import List from '../08/components/01-ListComponent';

// STOP!
// =====
//
// This file is not intended to be edited. This is used to
// help display and validate the work on the exercises.
//
// In general, files ending with /*.story.jsx$/i are not expected to be changed
// as part of the exercises.
//
// @see: All files inside '../08/*' instead.
//

storiesOf('Exercises/08', module)
  .add('01 - Context API', renderExercise01);

//
// Exercise 01
//
function renderExercise01() {
  const teamNames = [
    'Apollo',
    'Nemisis',
    'Legends',
    'Gryffindors',
    'Justice',
    'Avengers',
  ];
  const component = <Exercise01 teamNames={teamNames} />;
  const story = (
    <CenterContent>
      {component}
    </CenterContent>
  );

  specs(() => describe('01 - Context API', () => {
    let wrapper;
    let ctxFn;

    beforeEach(() => {
      wrapper = mount(component);
      ctxFn = sinon.fake();
      wrapper = mount(component);

      if (ActiveContext != null) {
        mount(<ActiveContext.Consumer>{ctxFn}</ActiveContext.Consumer>);
      }
    });

    afterEach(() => {
      sinon.restore();

      if (wrapper) {
        wrapper.unmount();

        wrapper = null;
      }
    });

    //
    // Context
    //
    it('Context: Creates a context object with the expected shape', () => {
      assert.property(ctxFn.lastCall.lastArg, 'activeIndex');
      assert.property(ctxFn.lastCall.lastArg, 'handleUpdateIndex');
    });

    it('Context: Creates a context object with the expected parameter types', () => {
      assert.isNumber(ctxFn.lastCall.lastArg.activeIndex);
      assert.isFunction(ctxFn.lastCall.lastArg.handleUpdateIndex);
    });

    it('Context: Creates a context object with the expected default values', () => {
      assert.propertyVal(ctxFn.lastCall.lastArg, 'activeIndex', 0);
      assert.isUndefined(ctxFn.lastCall.lastArg.handleUpdateIndex());
    });

    //
    // List
    //
    it('List: Has the expected propType definition', () => {
      const supportedProps = Object.keys(List.propTypes); // eslint-disable-line

      assert.lengthOf(supportedProps, 1);
      assert.include(supportedProps, 'values');
    });

    //
    // ListItem
    //
    it('ListItem: Has the expected propType definition', () => {
      const supportedProps = Object.keys(ListItem.propTypes); // eslint-disable-line

      assert.lengthOf(supportedProps, 2);
      assert.include(supportedProps, 'value');
      assert.include(supportedProps, 'index');
    });

    it('ListItem: Handles the expected input data correctly', () => {
      const liWrapper = mount(<ListItem value="Foo" index={0} />);

      assert.include(liWrapper.text(), 'Foo');
    });

    it('ListItem: Invokes the context\'s `handleUpdateIndex` as expected', () => {
      const index = 3;
      const fn = sinon.fake();
      const context = {
        // activeIndex: 2,
        handleUpdateIndex: fn,
      };

      // FIXME Enzyme's Context option doesn't appear to
      //  be working so wrap it around the provider.
      const liWrapper = mount((
        <ActiveContext.Provider value={context}>
          <ListItem value="Foo" index={index} />
        </ActiveContext.Provider>
      ));

      liWrapper.find('li').simulate('click');

      assert.lengthOf(fn.lastCall.args, 1);
      assert.isUndefined(fn.lastCall.args.target, 'The onClick handler should not pass a Synthetic event; but the index of the current item');
      assert.equal(fn.lastCall.args[0], index, 'Expected the correct index to be sent through the context update handler');
    });

    it('ListItem: Styles the items according to their active state', () => {
      const index = 1;
      const context = {
        activeIndex: 2,
      };

      // FIXME Enzyme's Context option doesn't appear to
      // be working so wrap it around the provider.
      let liWrapper = mount((
        <ActiveContext.Provider value={context}>
          <ListItem value="Foo" index={index} />
        </ActiveContext.Provider>
      ));

      assert.isTrue(liWrapper.find('li').hasClass('bg-purple-light'), 'Expected the active state to have a light PURPLE bg');

      // FIXME Again, Enzyme's Context API doesn't seem to working
      // Updating props, clears the context...
      liWrapper = mount((
        <ActiveContext.Provider value={context}>
          <ListItem value="Foo" index={context.activeIndex} />
        </ActiveContext.Provider>
      ));

      assert.isTrue(liWrapper.find('li').hasClass('bg-teal-light'), 'Expected the active state to have a light TEAL bg');
    });

    it('ListItem: Does not rely on state stored in the DOM', () => {
      const liWrapper = mount(<ListItem value="blah" index={0} />);

      assert.notInclude(liWrapper.find('li').html(), 'data-index');
    });
  }));

  return story;
}
