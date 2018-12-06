import React, { Component } from 'react';
import './App.css';
import MyMapComponent from './components/MyMapComponent'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';


class App extends Component {

  render() {
    return (
      <div className="App">
      <MyMapComponent/>
      </div>
    );
  }
}

export default App;
 