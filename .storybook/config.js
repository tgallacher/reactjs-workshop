import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /story\.jsx$/);

addDecorator(
  withOptions({
    theme: themes.dark,
    url: '#',
  })
);

configure(
  () => req.keys().forEach(filename => req(filename)),
  module
);
