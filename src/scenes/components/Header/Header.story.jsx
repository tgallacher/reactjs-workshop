/* eslint import/no-extraneous-dependencies: off */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { storeDecorator } from 'utils/storybook';
import Header from './index';

storiesOf('Demo App/Header', module)
  .addDecorator(storeDecorator)
  .add('Header', () => <Header />);
