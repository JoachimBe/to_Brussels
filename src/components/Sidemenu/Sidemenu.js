import React from 'react';

import MenuToggleButton from "../ToggleButton/MenuToggleButton.js";

import './Sidemenu.css';

const SideMenu = props => {
    let menuClasses = "side-menu";
    if (props.show){
        menuClasses= "side-menu open";
    }
    return ( 
    <nav className={menuClasses}>
    
        <MenuToggleButton click={props.menuClickHandler}/>
     
    <div className="scroll">
        <ul className="liste-entiere">
            <li className="liste basic">BASICS<img src="https://i.goopics.net/wL0lZ.png" className="logo-basics" alt="basics"></img></li>
            <li className="liste museum">MUSEUMS<img src="https://i.goopics.net/g3aly.png" className="logo-museum" alt="museum"></img></li>
            <li className="liste monument">MONUMENTS<img src="https://i.goopics.net/eVkej.png" className="logo-monument" alt="monument"></img></li>            
            <li className="liste comics">COMICS<img src="https://i.goopics.net/NaqgZ.png" className="logo-comics" alt="comics"></img></li>
            <li className="liste streetart">STREET ART<img src="https://i.goopics.net/EdqX5.png" className="logo-streetart" alt="streetart"></img></li>
            <li className="liste memorial">MEMORIALS<img src="https://i.goopics.net/O3q2Q.png" className="logo-memorial" alt="memorial"></img></li>
            <div className="boutons">
                <button href="#" className="button bouton-text">Generate a course</button>
                <button href="#" className="button bouton-text">Go to Map</button>
            </div>
        </ul>
    </div>
    </nav>
    );
};

export default SideMenu;