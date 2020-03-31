import React, { Component } from 'react';
import './main-page.component.css';

// Collect possible errors
import ErrorBoundry from '../ErrorBoundry';

// Import custom components
import Header from '../header/header.component';
import CardList from '../card-list/card-list.component';
import SearchBox from '../search-box/search-box.component';

class MainPage extends Component {
  componentDidMount() { this.props.onRequestRobots(); }

  filteredRobots = () => {
    return this.props.robots.filter((robot) => {
      return (
        robot.name.toLowerCase()
        .includes(
          this.props.searchfield.toLowerCase()
        )
      );
    });
  };

  render() {
    // Import objects from redux props
    const { onSearchChange, isPending } = this.props;

    if (isPending) return <h1 className="app-logo f1 tc">Loading</h1>
    
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={ onSearchChange } />
        <ErrorBoundry>
          <CardList robots={this.filteredRobots(this.robots)} />
        </ErrorBoundry>
      </div>
    );
  }
}

export default MainPage;