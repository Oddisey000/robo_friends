import React, { Component } from 'react';

// Create Header component to avoid not needed rerendering
class Header extends Component {
  // Implementing React hook to not allow component update. If function return false then component not been updated
  shouldComponentUpdate(nextProps, nextState) {return false;}

  render() {
    return <h1 className="app-logo f1">RoboFriends</h1>
  }
};

export default Header;