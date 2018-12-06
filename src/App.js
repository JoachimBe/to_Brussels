import React, { Component } from 'react';
import SideMenu from "./components/Sidemenu/Sidemenu.js";
import Footer from './components/footer/index.js';
import Menu2 from './components/Menu2/Menu2.js';
import Home from './components/Home/home.js';
import Legal from './components/legal/index.js';
import AboutUs from './components/about-us/index.js'
import './App.css';
import Map from './components/Map/Map'

import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideMenuOpen: false,
      places: {},
      kilometres: 0,
      destination: {
          adress: ''
      }
    };
  }

  handleChange(data) {

    const newState = Object.assign({}, data)
    for (let item in newState) {
      if(!newState[item]){
        delete newState[item];
      }
    }
    this.setState({
      places: newState
    })
  }

  menuToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideMenuOpen: !prevState.sideMenuOpen };
    });
  };

  setMenu2(data){
    this.setState({
      kilometres: data.kilometres,
      adress: data.adress
    })
  }
  render() {


    return (
      <BrowserRouter>
      <React.Fragment>
      <div className="app">
          <Map 
            places={this.state.places}
          />
          <Switch>
          <Route exact path="/" component={Home} />
            <Route  path="/map" render={() => <SideMenu show={this.state.sideMenuOpen} menuClickHandler={this.menuToggleClickHandler} valMenu1={(datam1)=>this.handleChange(datam1)} />
} />
            <Route path="/generate-course" render={() => <Menu2 show={this.state.sideMenuOpen} menuClickHandler={this.menuToggleClickHandler} valMenu2={(datam2)=>this.setMenu2(datam2)} />
} />
            <Route  path="/legal" component={Legal} />
            <Route  path="/about" component={AboutUs} />
          </Switch>
         </div>
            <Footer />
            </React.Fragment>
      </BrowserRouter>
    );
  }

}

export default App;