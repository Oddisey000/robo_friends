import React, { Component } from 'react';
import './App.css';

// Collect possible errors
import ErrorBoundry from '../components/ErrorBoundry';

// Import custom components
import CardList from '../components/card-list/card-list.component';
import SearchBox from '../components/search-box/search-box.component';

/**
 * Declare the constructor and use state in application
 * To access React state super() need to be called
 * Declare robots data and search field wich is empty by default
 * When component did mount - fetch data from API and fill in robots array
 * When onSearchChange is called - reset application state's searchfield
 * Using filter method to check wich array element includes searched characters in its name
 * Use lowerCase to garantie correct comparison
 * Store data inside variable and use it in App's return state
 * If no data is in robots array show loading text to user
 * Use searchChange in property to send necessary data searchBox component
 * Use array of data wich is by default the complete robots array but when user interact with it - the array could be completely changed
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(users => {
      this.setState({ robots: users });
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    // Destructuring this.state
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return (
        robot.name.toLowerCase()
        .includes(
          searchfield.toLowerCase()
        )
      );
    });

    if (!robots.length) return <h1 className="app-logo f1 tc">Loading</h1>
    
    return (
      <div className="tc">
        <h1 className="app-logo f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;