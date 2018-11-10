import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';
import { configure as configureEnzyme } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// automatically import all files ending in *.stories.js
const req = require.context('../', true, /story\.jsx$/);

addDecorator(
  withOptions({
    // theme: themes.dark,
    url: '#',
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\//,
  })
);

configureEnzyme({
  adapter: new EnzymeAdapter()
});

configure(
  () => req.keys().forEach(filename => req(filename)),
  module
);
