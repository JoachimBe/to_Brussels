import React, { Component } from 'react';
import Legal from './components/Legal/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Legal/>
        </header>
      </div>
    );
  }
}

export default App;
