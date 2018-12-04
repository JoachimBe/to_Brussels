import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import DisplayApi from './components/API/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <DisplayApi />
      </div>
    );
  }
}

export default App;