import React, { Component } from 'react';
import logo from './logo_to_brussels.png';
import save from './save2.png';
import print from './printt.png';

class Header extends React.Component{
    render(){
        return( <div className="App">
            <a href="*"> <img src={logo} className="logo-left" alt="logo to brussels" /></a>
            <button className="Help-button" type="button"> ? </button>
            <h1 className="Titre">To Brussels</h1>
            <button className="button-right"><img src={print} className="logo-right" /></button>
            <button className="button-right"><img src={save} className="logo-right" /></button>
        </div>
        )
    }
}
export default Header;