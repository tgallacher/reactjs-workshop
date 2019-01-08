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
// import { beforeEach, afterEach } from 'storybook-addon-specifications/dist/preview';
import { assert } from 'chai';
import { shallow } from 'enzyme';
// import sinon from 'sinon';

import CenterContent from '../CenterContent';
import store, { fetchConsultantComplete } from '../09/01';
import { rowData } from './Exercise04.story';
import AppWrapper from '../10/01';
import App, { mapStateToProps } from '../10/components/01-App';

// STOP!
// =====
//
// This file is not intended to be edited. This is used to
// help display and validate the work on the exercises.
//
// In general, files ending with /*.story.jsx$/i are not expected to be changed
// as part of the exercises.
//
// @see: All files inside '../10/*' instead.
//

storiesOf('Exercises/10', module)
  .add('01 - React Redux + mapStateToProps', renderExercise01);

function renderExercise01() {
  let story = (
    <CenterContent>
      <h1>Please complete Exercise 09/01 first</h1>
    </CenterContent>
  );

  if (store != null) {
    if (! fetchConsultantComplete || fetchConsultantComplete() == null) {
      throw new Error('You should make sure your tests pass in Exercise 09/01 for the `fetchConsultantComplete` action creator');
    }

    store.dispatch(fetchConsultantComplete(rowData));

    story = (
      <CenterContent>
        <AppWrapper />
      </CenterContent>
    );
  }

  specs(() => describe('', () => {
    it('mapStateToProps: Is defined and is callable', () => {
      assert.isNotNull(mapStateToProps, 'mapStateTopProps should be defined');
      assert.isFunction(mapStateToProps, 'mapStateTopProps should be callable');
    });

    it('mapStateToProps: should map the data to the `consultantData` prop', () => {
      assert.isFunction(mapStateToProps, 'mapStateTopProps should be callable');

      const mockData = [
        { name: 'foo' },
        { name: 'bar' },
      ];

      const props = mapStateToProps(mockData);

      assert.hasAnyKeys(props, 'consultantData', 'Your selector should assign data to the `consultantData` prop key');
      assert.deepEqual(props.consultantData, mockData, 'Your selector should pull the correct data from the store');
      assert.strictEqual(props.consultantData, mockData, 'Your selector should pull the exact same data from the store');
    });

    it('App: Connects it to the Redux store', () => {
      const wrapper = shallow(<App store={store} />);

      assert.isDefined(wrapper.props().dispatch, 'Expected to see a connected `App` component');
    });
  }));

  return story;
}
