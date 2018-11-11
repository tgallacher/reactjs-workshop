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
import { beforeEach, afterEach, after } from 'storybook-addon-specifications/dist/preview';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import CenterContent from './CenterContent';
import Exercise01 from './08/01';

// STOP!
// =====
//
// This file is not intended to be edited. This is used to
// help display and validate the work on the exercises.
//
// In general, files ending with /*.story.jsx$/i are not expected to be changed
// as part of the exercises.
//
// @see: All files inside './05/*' instead.
//

storiesOf('Exercises/08', module)
  .add('01', renderExercise01);

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

  return story;
}
