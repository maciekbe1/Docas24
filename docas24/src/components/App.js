import React from 'react';
import './App.css';
import Navbar from './navigation/Navbar'
import Search from './searchForm/Search'


class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <Navbar />
        <Search />
      </div>
    );
  }
}

export default App;
