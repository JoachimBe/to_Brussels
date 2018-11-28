import React from 'react';
import Footer from '../footer/index.js';
import Legal from '../legal/index.js';
import SideMenu from '../Sidemenu/Sidemenu.js';

class Integration extends React.Component {
  

  render() {
    
    return (
      <div>
        <SideMenu show={this.state.sideMenuOpen} menuClickHandler={this.menuToggleClickHandler} />
        <Legal/>
        <Footer/>
      </div>
    );
  }
}

export default Integration;