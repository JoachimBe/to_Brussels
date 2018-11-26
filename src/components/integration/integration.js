import React from 'react';
import Menu2 from "../Menu2/Menu2.js";
import Footer from '../footer/index.js';
import Legal from '../legal/index.js';

class Integration extends React.Component {
  

  render() {
    
    return (
      <div>
        <Menu2/>
        <Legal/>
        <Footer/>
      </div>
    );
  }
}

export default Integration;