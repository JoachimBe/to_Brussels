import React, { Component } from 'react';
import SideMenu from "./components/Sidemenu/Sidemenu.js";
import Legal from './components/Legal/index.js';
import Footer from './components/Footer/index.js';
import Menu2 from './components/Menu2/Menu2.js';
import Toolbar from './components/Toolbar/Toolbar.js';


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      sideMenuOpen: false,
      places : {}
    };
  }

  handleChange(data){
    this.setState({
      places:data
    })
  }

  menuToggleClickHandler = () =>{
    this.setState((prevState)=>{
      return {sideMenuOpen:!prevState.sideMenuOpen};
    });
  };

  render() {
    
    
    return (
      <div>
        <Toolbar/>
<Menu2/>      <div className="App">
        <Legal/>
        <Footer/>
      </div>
      </div>
    );
  }
}

export default App;
