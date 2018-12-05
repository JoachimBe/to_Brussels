import React, { Component } from 'react';

import './App.css';
import Menu2 from './components/Menu2/Menu2'
import { Route, BrowserRouter, Switch} from 'react-router-dom';

import DisplayApi from './components/API/index.js';


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
    this.setState({
      places: data
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
<<<<<<< HEAD
      <React.Fragment>
      <div className="app">
          <Switch>
          <Route exact path="/" component={Home} />
            <Route  path="/map" render={() => <SideMenu show={this.state.sideMenuOpen} menuClickHandler={this.menuToggleClickHandler} />
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
=======
        <Switch>
          <Route path="/" render={() => <Menu2 valMenu2={(datam2)=>this.setMenu2(datam2)} />} />
        </Switch>
        </BrowserRouter>  

>>>>>>> b400ef81cb851931f77e3c7122036c193deef5e5
    );
  }

}

export default App;