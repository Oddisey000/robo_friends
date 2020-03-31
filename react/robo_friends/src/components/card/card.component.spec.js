// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';
// Import component to test
import React from 'react';
import Card from './card.component';

it('Expect to render card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});