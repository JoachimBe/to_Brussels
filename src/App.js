import React, { Component } from 'react';

import './App.css';
import Menu2 from './components/Menu2/Menu2'
import { Route, BrowserRouter, Switch} from 'react-router-dom';

import DisplayApi from './components/API/index.js';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      places : {},
      kilometres: 0,
      destination: {
          adress: ''
      }
  }
  }

  setMenu2(data){
    this.setState({
      kilometres: data.kilometres,
      adress: data.adress
    })
  }
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <Menu2 valMenu2={(datam2)=>this.setMenu2(datam2)} />} />
        </Switch>
        </BrowserRouter>  

    );
  }

}

export default App;