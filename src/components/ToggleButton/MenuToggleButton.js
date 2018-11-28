import React from 'react';
import MenuToggleButton from "./MenuToggleButton.css"

const menuToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
    </button>
) ;

export default menuToggleButton;