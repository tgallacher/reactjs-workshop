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
// import sinon from 'sinon';

import CenterContent from '../CenterContent';
import store, {
  CONSULTANTS_FETCH_REQUEST,
  CONSULTANTS_FETCH_COMPLETE,
  fetchConsultantComplete,
  fetchConsultantData,
  reducer,
} from '../09/01';

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

storiesOf('Exercises/09', module)
  .add('01 - Action Creators + Reducers', renderExercise01);

function renderExercise01() {
  const story = (
    <CenterContent>
      <div className="text-center w-full">
        <h1>Redux Tests...</h1>

        <p>Nothing to see here... This is all business logic; therefore we are looking to get all greens below!</p>
      </div>
    </CenterContent>
  );

  specs(() => describe('01 - Action Creators + Reducers', () => {
    //
    // Actions
    //
    it('Action: Has the correct action for `fetchConsultantData`', () => {
      assert.isNotNull(fetchConsultantData, 'Action creators cannot be null');

      const action = fetchConsultantData();

      assert.isNotNull(action, 'Action creators cannot return null');
      assert.hasAllKeys(action, ['type', 'payload', 'meta', 'error'], 'Action creator should output an FSA spec action');
      assert.propertyVal(action, 'payload', null, 'the `payload` key should be null');
      assert.propertyVal(action, 'meta', null, 'the `meta` key should be null');
      assert.propertyVal(action, 'error', false, 'the `error` key should be false');
      assert.propertyVal(action, 'type', CONSULTANTS_FETCH_REQUEST, 'the action should be of the correct `type`');
      assert.notDeepInclude(JSON.stringify(fetchConsultantData('@foo')), '@foo', 'The action type should not accept any input');
    });

    it('Action: Has the correct action for `fetchConsultantComplete`', () => {
      const mockData = [
        { name: 'foo' },
        { name: 'bar' },
      ];

      assert.isNotNull(fetchConsultantComplete, 'Action creators cannot be null');

      const action = fetchConsultantComplete();

      assert.isNotNull(action, 'Action creators cannot return null');
      assert.hasAllKeys(action, ['type', 'payload', 'meta', 'error'], 'Action creator should output an FSA spec action');
      assert.propertyVal(action, 'meta', null, 'the `meta` key should be null');
      assert.propertyVal(action, 'error', false, 'the `error` key should be false');
      assert.propertyVal(action, 'type', CONSULTANTS_FETCH_COMPLETE, 'the action should be of the correct `type`');
      assert.isObject(action.payload, 'the `payload` key should default to an object type');
      assert.hasAllKeys(action.payload, 'data', 'the `payload` object should include the `data` key');
      assert.isUndefined(action.payload.data, 'The `data` key should default to be undefined');

      assert.deepEqual(fetchConsultantComplete(mockData).payload.data, mockData, 'The action type should accept input data');

      const err = new Error('mock fail');

      assert.isTrue(fetchConsultantComplete(err).error, 'The action should indicate an error has occurred');
      assert.strictEqual(fetchConsultantComplete(err).payload.data, err, 'The data node should be assigned to the Error instance');
    });

    //
    // Reducer
    //

    const expectedInitState = [];

    it('Reducer: should return the default state when `prevState` is undefined', () => {
      const state = reducer(undefined, { type: '@@smoke-test' });

      assert.isFalse(state === undefined, 'The reducer should return something (You might have not started this part of the exercise yet)');
      assert.deepEqual(state, expectedInitState, 'The reducer should default the state to the initial state');
    });

    it('Reducer: should return the payload data when `fetchConsultantComplete` is dispatched', () => {
      const mockData = [
        { name: 'foo' },
        { name: 'baz' },
      ];

      const newState = reducer(expectedInitState, fetchConsultantComplete(mockData));

      assert.deepEqual(newState, mockData, 'The reducer should default the state to the initial state');
      assert.notStrictEqual(newState, mockData, 'State should be immutable');
    });

    it('Reducer: should be defensive when pulling data out of actions', () => {
      let newState;

      try {
        newState = reducer(expectedInitState, fetchConsultantComplete());
      } catch (err) {
        throw new Error('The data you get from APIs might not always be what you think; in JS be defensive, ALL the time!');
      }

      assert.deepEqual(newState, expectedInitState, 'The reducer should default the state to the initial state when it cannot get the data from the action');
    });

    it('Reducer: returns the previous state if an unrecognised action is dispatched', () => {
      const mockData = [
        { name: 'foo' },
        { name: 'baz' },
      ];

      let newState = reducer(expectedInitState, fetchConsultantComplete(mockData));

      newState = reducer(newState, { type: '@@test/you-dont-know' });
      assert.deepStrictEqual(newState, mockData);
    });

    //
    // Store
    //
    it('Store: Is a valid Redux store', () => {
      assert.isNotNull(store, 'Store must be created using the `createStore` method');
      assert.property(store, 'getState');
      assert.property(store, 'dispatch');
      assert.property(store, 'subscribe');
    });

    it('Store: It is not initialised with a preloaded initial state', () => {
      assert.isNotNull(store, 'Store must be created using the `createStore` method');
      assert.deepEqual(store.getState(), expectedInitState, 'The initial state should be set by your reducer');
    });
  }));

  return story;
}
