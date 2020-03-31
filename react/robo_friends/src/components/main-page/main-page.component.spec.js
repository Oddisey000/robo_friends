// Import testing module
import { shallow } from 'enzyme';
// Import tested component
import React from 'react';
import MainPage from './main-page.component';

// Predefine data befor run actual tests
let wrapper;
// Define wich code needs to run before each test
beforeEach(() => {
  // Mocking the store wich is required by the App
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchfield: '',
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps}/>)
});

describe('Testing App component', () => {
  it('expect to render App component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // Check if it filter robots correctly
  it('filters robots correctly', () => {
    // Mocking the store wich is required by the App
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchfield: 'john',
      isPending: false
    };
    // Create wrapper for the new custom mockProps
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filteredRobots()).toEqual([{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }]);
  });

  // Checks results if no robots found
  it('If there is no robots', () => {
    // Mocking the store wich is required by the App
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchfield: 'a',
      isPending: false
    };
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filteredRobots()).toEqual([]);
  });
});