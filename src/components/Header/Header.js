import React, { Component } from 'react';
import save from './save2.png';
import print from './printt.png';

class Header extends React.Component{
    render(){
        return( <div className="App">
            
            <h1 className="Titre">To Brussels</h1>
            <button className="button-right"><img src={save} className="logo-right" /></button>
            <button className="button-right"><img src={print} className="logo-right" /></button>
        </div>
        )
    }
}
export default Header;