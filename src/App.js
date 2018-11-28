import React, { Component } from 'react';
import './App.css';
import { DataProvider } from './ContextAPI/Context';
import Test from './components/Test/index';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      places : {}
    }
  }

  handlePlacesChoice(data){
    this.setState({
      places : data
    })
  }
  render() {
    return (
      <div className="App">
        <DataProvider value={this.state.places} >
          <Test callback={(data) => this.handlePlacesChoice(data)} />
        </DataProvider>
      </div>
    );
  }
}

export default App;
 