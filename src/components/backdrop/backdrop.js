import React from "react";
import Backdrop from "./backdrop.css"
const backdrop = props => (
    <div className="backdrop" onClick={props.click}></div>
);

export default backdrop;