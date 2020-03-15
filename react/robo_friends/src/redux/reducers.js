// Import all the constants
import { CHANGE_SEARCH_FIELD } from './constants';

// Set all parameters of initial state of the application
const initialState = {
  searchfield: ''
};

// Create search robots reducer
export const searchRobots = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchfield: action.payload };
    default:
      return state;
  }
}