import React, { Component } from 'react';
import './App.css';
import Menu2 from './components/Menu2/Menu2.js'
import Legal from './components/Legal/index.js'
import Footer from './components/Footer/index.js'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Menu2/>
        <Legal/>
        <Footer/>
      </div>
    );
  }
}

export default App;