import React, { Component } from 'react';

import './App.css';

import SearchBar from '../SearchBar/SearchBar.jsx';
import BusinessList from '../BusinessList/BusinessList.jsx';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>ravenous</h1>

        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}
