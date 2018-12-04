import React, { Component } from 'react';
import SideMenu from "./components/Sidemenu/Sidemenu.js";
import Footer from './components/Footer/index.js';
import Menu2 from './components/Menu2/Menu2.js';
import Home from './components/Home/home.js';
import Legal from './components/Legal/index.js';
import AboutUs from './components/about-us/index.js'

import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideMenuOpen: false,
      places: {}
    };
  }

  handleChange(data) {
    this.setState({
      places: data
    })
  }

  menuToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideMenuOpen: !prevState.sideMenuOpen };
    });
  };

  render() {


    return (
      <BrowserRouter>
        <div>
          
          <Switch>
          <Route exact path="/" component={Home} />

            <Route  path="/map" render={() => <SideMenu show={this.state.sideMenuOpen} menuClickHandler={this.menuToggleClickHandler} />
} />
            <Route path="/generate-course" render={() => <Menu2 show={this.state.sideMenuOpen} menuClickHandler={this.menuToggleClickHandler} />
} />

            <Route  path="/legal" component={Legal} />
            <Route  path="/about" component={AboutUs} />


          </Switch>
          <div className="App">
            <Footer />
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
