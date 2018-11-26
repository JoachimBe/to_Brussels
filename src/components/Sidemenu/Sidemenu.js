import React from 'react';

import MenuToggleButton from "../ToggleButton/MenuToggleButton.js";

import './Sidemenu.css';

class SideMenu extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            places : {
                museums:false,
                monument:false,
                comics:false,
                streetart:false,
                memorials:false
            }
        }
    }
 
   

    selectPlace (place) {

        let previousState =this.state.places;
        previousState[place] = !previousState[place]
        this.setState({
            places : previousState
        })
    }
    render (){
    return ( 
    <nav className={this.props.show ? "side-menu open" : "side-menu"}>
    
        <MenuToggleButton click={this.props.menuClickHandler}/>
        <div className="scroll">
        <div className="container">
        <img className="image-1" src="https://i.goopics.net/2GKx8.png" alt="logo"></img>

        <ul className="liste-entiere">
            <li className={"liste museums" + (this.state.places.museums ? " active" : "")}   onClick={() => this.selectPlace('museums')}>MUSEUMS<img src="https://i.goopics.net/g3aly.png" className="logo-museum" alt="museum"></img></li>
            <li className={"liste monument" + (this.state.places.monument ? " active" : "")}   onClick={() => this.selectPlace('monument')}>MONUMENTS<img src="https://i.goopics.net/eVkej.png" className="logo-monument" alt="monument"></img></li>
            <li className={"liste comics" + (this.state.places.comics ? " active" : "")} onClick={() => this.selectPlace('comics')}>COMICS<img src="https://i.goopics.net/NaqgZ.png" className="logo-comics" alt="comics"></img></li>
            <li className={"liste streetart" + (this.state.places.streetart ? " active" : "")} onClick={() => this.selectPlace('streetart')}>STREET ART<img src="https://i.goopics.net/EdqX5.png" className="logo-streetart" alt="streetart"></img></li>
            <li className={"liste memorial" + (this.state.places.memorials ? " active" : "")} onClick={() => this.selectPlace('memorials')}>MEMORIALS<img src="https://i.goopics.net/O3q2Q.png" className="logo-memorial" alt="memorial"></img></li>
            <div className="boutons">
                <button href="#" className="button bouton-text" onClick = {this.handleChange}>Generate a course</button>
                <button href="#" className="button bouton-text" onClick={this.props.menuClickHandler}>Go to Map</button>
            </div>
        </ul>
    </div>
    </div>
    </nav>
    )}
}

export default SideMenu;