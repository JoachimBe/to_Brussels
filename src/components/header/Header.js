import React, { Component } from 'react';
import logo from './logo_to_brussels.png';

class Header extends React.Component{
    render(){
        return <div>
            <a href="*"> <img src={logo} className="App-logo" alt="logo to brussels" /></a>
            <button className="Help-button" type="button"> ? </button>
            <h1>To Brussels</h1>
        </div>
    }
}
export default Header;