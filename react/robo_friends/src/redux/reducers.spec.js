// Import all the constants
import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

// Import reducers and actions
import * as reducers from './reducers';
import * as actions from './actions';

// Testing searchRobots reducer
describe('searchRobots', () => {
  // Mock variables
  const mockInitialState = {searchfield: ''};
  // Test the initial state
  it('should return initial state', () => {
    expect(reducers.searchRobots(undefined, {}))
    .toEqual({
      searchfield: ''
    })
  });
  // If state handeling correctly
  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchRobots(mockInitialState, actions.setSearchField('abc')))
    .toEqual({
      searchfield: 'abc'
    });
  })
});

// Test requestRobots reducer
describe('requestRobots', () => {
  // Mock variables
  const mockInitialState = {
    isPending: false,
    robots: [],
    error: ''
  };
  const mockPayloadSuccess = [{
    id: '123',
    name: 'test',
    email: 'test@gmail.com'
  }];
  // Test the initial state
  it('should return initial state', () => {
    expect(reducers.requestRobots(undefined, {}))
    .toEqual(mockInitialState)
  });
  // If REQUEST_ROBOTS_PENDING could hadle correctly
  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(mockInitialState, {
      type: REQUEST_ROBOTS_PENDING
    }))
    .toEqual({
      robots: [],
      isPending: true,
      error: ''
    });
  });
  // If REQUEST_ROBOTS_PENDING could hadle correctly
  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(reducers.requestRobots(mockInitialState, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: mockPayloadSuccess
    }))
    .toEqual({
      robots: mockPayloadSuccess,
      isPending: false,
      error: ''
    });
  });
  // If REQUEST_ROBOTS_FAILED could hadle correctly
  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(reducers.requestRobots(mockInitialState, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'error'
    }))
    .toEqual({
      error: 'error',
      isPending: false,
      robots: []
    });
  });
});