import React, { Component } from 'react';
import './App.css';
import Map from './components/Map/Map'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      places : {}
    }
  }

  
  render() {
    return (
      <div>
        <Map/>
      </div>
    );
  }
}


export default App;