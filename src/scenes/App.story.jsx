/* eslint import/no-extraneous-dependencies: off */
import React from 'react';
import { storiesOf } from '@storybook/react';

import App from './index';

storiesOf('Demo App/App', module)
  .add('App', () => (
    <App />
  ));
