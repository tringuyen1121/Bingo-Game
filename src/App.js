import React, { Component } from 'react';
import './App.css';
import BingoMachine from './containers/BingoMachine';
import BingoCard from './containers/BingoCard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BingoCard />
        <BingoMachine />
      </div>
    );
  }
}

export default App;
