import React, { Component } from 'react';
import './App.css';
import SimpleMap from './components/Map/Map';

import Legal from './components/Legal/index.js'
import './App.css';
import Footer from './components/Footer/index.js'


class App extends Component {
  render() {
    return (
      
      <div className="App">
        <SimpleMap/>
        <Legal/>
        <Footer/>
      </div>
    );
  }
}

export default App;