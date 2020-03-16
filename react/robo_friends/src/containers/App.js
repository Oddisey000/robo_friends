import React, { Component } from 'react';
import './App.css';

// Collect possible errors
import ErrorBoundry from '../components/ErrorBoundry';

// Import custom components
import CardList from '../components/card-list/card-list.component';
import SearchBox from '../components/search-box/search-box.component';

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
  componentDidMount() { this.props.onRequestRobots(); }

  render() {
    // Import objects from redux props
    const { searchfield, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return (
        robot.name.toLowerCase()
        .includes(
          searchfield.toLowerCase()
        )
      );
    });

    if (isPending) return <h1 className="app-logo f1 tc">Loading</h1>
    
    return (
      <div className="tc">
        <h1 className="app-logo f1">RoboFriends</h1>
        <SearchBox searchChange={ onSearchChange } />
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </div>
    );
  }
}

// Using connect Redux method to controll App's state
export default connect(mapStateToProps, mapDespatchToProps)(App);