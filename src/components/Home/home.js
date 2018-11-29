import React from 'react';
import './home.css';
import {NavLink} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="body-home">
            <a className="lien" href="https://wildcodeschool.be/"><p>This Project was brought to you by <span className="wcs">Wild Code School</span>'s Belgian Students</p></a>
                <div className='titre-home'>
                    <h1 className="titre-1-home">TO BRUSSELS</h1>
                    <h4 className="titre-2-home">The best way to discover the City's wonders</h4>
                    <NavLink to='/map' className="get-started-home">Let's Go</NavLink>
                </div>
            </div>
        );
    }
}


export default Home;