import React, { Component } from 'react';
import AboutUs from './components/AboutUs/index.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <AboutUs/>
        </header>
      </div>
    );
  }
}

export default App;
