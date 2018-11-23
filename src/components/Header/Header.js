import React, { Component } from 'react';
import './main.css'
import save from './save2.png';
import print from './printt.png';

class Header extends React.Component{
    render(){
        return( <div className="header">
            
            <h1 className="title">To Brussels</h1>
            <div className="header-buttons">
            </div>
        </div>
        )
    }
}
export default Header;