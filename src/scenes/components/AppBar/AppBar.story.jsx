/* eslint import/no-extraneous-dependencies: off */
import React from 'react';
import { storiesOf } from '@storybook/react';

import AppBar from './index';

storiesOf('AppBar', module)
  .add('AppBar', () => <AppBar />);
