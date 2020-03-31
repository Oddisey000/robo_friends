import { shallow } from 'enzyme';
// Import component to test
import React from 'react';
import CardList from './card-list.component';

it('Expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }
  ];
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});