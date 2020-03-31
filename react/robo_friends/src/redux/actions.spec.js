// Import all the constants
import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

// Import actions to test
import * as actions from './actions';

// Packages required to test fake store
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

// Configuring mock store
let mockStore = configureMockStore([thunkMiddleware]);
mockStore = mockStore();

// Testing setSearchField action
describe('setSearchField', () => {
  it('should create action to search robots', () => {
    // Mock variables
    const mockText = 'test';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: mockText
    };
    // Actual test
    expect(actions.setSearchField(mockText))
    .toEqual(expectedAction);
  });
});

// Testing requestRobots action
describe('requestRobots', () => {
  // Mock variables
  const mockAction = mockStore.getActions();
  let expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  };
  mockStore.dispatch(actions.requestRobots());
  it('should run robots request', () => {
    expect(mockAction[0]).toEqual(expectedAction);
  });
});