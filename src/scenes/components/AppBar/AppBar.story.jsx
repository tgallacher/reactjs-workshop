/* eslint import/no-extraneous-dependencies: off */
import React from 'react';
import { storiesOf } from '@storybook/react';

import AppBar from './index';

storiesOf('Demo App/AppBar', module)
  .add('AppBar', () => <AppBar />);
