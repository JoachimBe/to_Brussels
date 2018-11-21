import React from "react";
import menu from "./index.css";

class Menu extends React.Component{
render() {
    
return (
<div>
<header>
</header>
<menu>
<body>
    <div className="sidebar">
        <div className="toggle-btn" onclick={"togglesidebar"}>
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
        </div>
        <div className="menu">
            <img src="https://i.goopics.net/ke8OJ.png"alt="logo" className="logo"></img>
            <img src="https://i.goopics.net/dkqWr.png" alt ="help" className="help"></img>
            <ul>
            <li className="liste basic">BASICS<img src="https://i.goopics.net/wL0lZ.png" className="logo-basics" alt="basics"></img></li>
                <li className="liste museum">MUSEUMS<img src="https://i.goopics.net/g3aly.png" className="logo-museum" alt="museum"></img></li>
                <li className="liste monument">MONUMENTS<img src="https://i.goopics.net/eVkej.png" className="logo-monument" alt="monument"></img></li>            
                <li className="liste comics">COMICS<img src="https://i.goopics.net/NaqgZ.png" className="logo-comics" alt="comics"></img></li>
                <li className="liste streetart">STREET ART<img src="https://i.goopics.net/EdqX5.png" className="logo-streetart" alt="streetart"></img></li>
                <li className="liste memorial">MEMORIALS<img src="https://i.goopics.net/O3q2Q.png" className="logo-memorial" alt="memorial"></img></li>
            </ul>
            <button className="button">Generate <br/>a course</button>
            <button className="buttonTwo">Go to Map</button>
        </div>
    </div>
</body>
</menu>

</div>
);
}
}

export default Menu;