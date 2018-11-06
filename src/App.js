import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import img from './logo_to_brussels.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header/>
        </header>
      </div>
    );
  }
}

export default App;
