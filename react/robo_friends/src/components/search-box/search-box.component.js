import React from 'react';

/**
 * Take searchChange wich is onSearchChange function declaration from the App component
 * If input field's value was changed - user searchChange parameter to call the onSearchChange function
 */
const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search" 
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;