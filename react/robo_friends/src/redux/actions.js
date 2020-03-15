// Import all the constants
import { CHANGE_SEARCH_FIELD } from './constants';

// Export data to reducer from all part of the application wich is require state changes
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});