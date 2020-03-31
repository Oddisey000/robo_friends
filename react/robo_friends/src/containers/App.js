import React, { Component } from 'react';
// import './App.css';

// Import custom components
import MainPage from '../components/main-page/main-page.component';

// Import Redux actions
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../redux/actions';

// Configuring mapStateToProps and mapDespatchToProps Redux functions
const mapStateToProps = state => {
  return {
    searchfield: state.searchRobots.searchfield,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
const mapDespatchToProps = (dispatch) => {
  return {
    // For onSearchChange now Redux is responsible and dispatch as new action
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    // Handling robots request by Reducer and Reducer's action
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  render() { 
    return <MainPage { ...this.props } />
  }
}

// Using connect Redux method to controll App's state
export default connect(mapStateToProps, mapDespatchToProps)(App);