import React, { Component } from 'react';
import save from './save2.png';
import print from './printt.png';

class Header extends React.Component{
    render(){
        return( <div className="header">
            
            <h1 className="title">To Brussels</h1>
            <div className="btn_group">
            <button className="button-right"><img src={save} className="logo-right" /></button>
            <button className="button-right"><img src={print} className="logo-right" /></button>
            </div>
        </div>
        )
    }
}
export default Header;