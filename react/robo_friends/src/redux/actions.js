// Import all the constants
import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

// Export data to reducer from all part of the application wich is require state changes
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// Create and dispatch robots payload
export const requestRobots = () => (dispatch) => {
  // If there is no payload it can have only type property
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  // Now fetch the data
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    // If there is data then dispatch an object payload will be data from the API
    .then(data => dispatch({
      type: REQUEST_ROBOTS_SUCCESS,
      payload: data
    }))
    // Catch error if there is an error during request and dispatch it as payload
    .catch(error => dispatch({
      type: REQUEST_ROBOTS_FAILED,
      payload: error
    }))
};