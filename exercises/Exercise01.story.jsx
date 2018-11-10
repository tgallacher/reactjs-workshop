/* eslint import/no-extraneous-dependencies: off, func-names: off */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import { beforeEach } from 'storybook-addon-specifications/dist/preview';
import expect from 'expect';
import { mount } from 'enzyme';

import Component01 from './01/01';


// STOP!
// =====
//
// These files are not intended to be edited. These are used to
// help display and validate the work on the exercies.
//
// See the files inside './01/*' instead.
// The files you are interested should not end /*.story.jsx$/i
//

storiesOf('Exercises/01', module)
  .add('01', () => {
    const component = <Component01 status="available" stat={26} />;

    specs(() => describe('Exercise 01-01', () => {
      let output;

      beforeEach(() => {
        output = mount(component);
      });

      it('Should render the status label', () => {
        expect(output.text()).toContain('available');
      });

      it('Should render the stat value', () => {
        expect(output.text()).toContain('26');
      });

      it('Should render one status icon', () => {
        let found = 0;

        found += output.find('.fas').length;
        found += output.find('.far').length;

        expect(found).toEqual(1);
      });
    }));

    return component;
  });
