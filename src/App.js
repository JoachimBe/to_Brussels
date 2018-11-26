import React, { Component } from 'react';
import SideMenu from "./components/Sidemenu/Sidemenu.js";
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
        <SideMenu show={this.state.sideMenuOpen} menuClickHandler={this.menuToggleClickHandler} />
      </div>
    );
  }
}

export default App;