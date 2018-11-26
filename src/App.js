import React, { Component } from 'react';
import SideMenu from "./components/Sidemenu/Sidemenu.js";
<<<<<<< HEAD
=======
import Legal from './components/Legal/index.js'
import Footer from './components/Footer/index.js'
>>>>>>> 596162b7db16468f2fe2df64feba1351a2f0a5a6
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
      <div className="App">
        <Legal/>
        <Footer/>
      </div>
    );
  }
}

export default App;