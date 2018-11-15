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
import sinon from 'sinon';

import CenterContent from '../CenterContent';
import * as ExerciseExports from '../09/01';

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
// ✅    Create an Action creator for indicating that we would like to provide data received from a network request.
//        This should be assigned to the `fetchConsultantComplete` stub below.
//        This should have the type: CONSULTANTS_FETCH_COMPLETE (already defined below).
//        This action creator should accept a single input arg, which will be an array of consultant data.
//        This input arg should be stored within the action at `payload.data`.
//
// ✅    All actions should default their unused object keys to null, if they don't have any data. With the exception of `error`,
//        which should default to `false`.
// ✅    You All actions should adhere to the FSA object structure.
//
// ✅    Complete the `reducer` using the stub below.
// ✅    Your reducer should return the default store state when `prevState` is undefined.
// ✅    Your default store state should be an empty array.
// ✅    The reducer should return the payload data to the store when the `fetchConsultantComplete` action is dispatched
// ✅    The reducer should return the previous state if any other action is dispatched
//
// ✅    Create a single store for our 'app' using the `createStore` method (already imported above)
// ✅    The store should be created without a `preloaded state` (only call with 1 arg)
// ✅    The store should be configured to use our reducer we created in the above tasks.
  specs(() => describe('01 - Action Creators + Reducers', () => {
    // Actions
    it('Has the correct action for `fetchConsultantData`', () => {
      throw new Error('Test not implemented yet');
      // Check FSA
      // Check null for meta, payload
      // Check false for error
      // Check type string matches
      // Check input args don't appear in object
    });

    it('Has the correct action for `fetchConsultantComplete`', () => {
      throw new Error('Test not implemented yet');


    });

    // Reducer

    // Store
  }));

  return (
    <CenterContent>
      <div className="text-center w-full">
        <h1>Redux Tests...</h1>

        <p>Nothing to see here... This is all business logic; therefore we are looking to get all greens below!</p>
      </div>
    </CenterContent>
  )
}
