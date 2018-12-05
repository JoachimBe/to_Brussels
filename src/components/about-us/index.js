
import React from "react";
import './index.css';
import Toolbar from '../Toolbar/Toolbar.js'
import SideMenu from "../Sidemenu/Sidemenu.js";
import { NavLink } from "react-router-dom";


class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sideMenuOpen: false,
        };
      }

    menuToggleClickHandler = () => {
        this.setState((prevState) => {
          return { sideMenuOpen: !prevState.sideMenuOpen };
        });
      };
    
    render() {
        return (
            
            <React.Fragment>
                <Toolbar/>
              <SideMenu show={this.state.sideMenuOpen} menuClickHandler={this.menuToggleClickHandler} />          
              <NavLink to='/map'><img src="https://i.goopics.net/YkyvR.png" alt="back" className="image-back"></img></NavLink>

                <h1>About Us</h1>
                <h2>What our site does</h2>
                <p>To Brussels helps people, tourrists and locals, plan their trip arround Brussels and helps them discover new and intresting things all arround the city.</p>
                <p>Users have the posbility to choose among a variety of activites throughout the beautiful city of Brussels.</p>
                <h2>Meet the creators</h2>
                <div className="creators">
                    <figure className="creator">
                        <img className="photo" src="https://i.goopics.net/ONwj7.jpg" alt="Anja" />
                        <figcaption className="photo-description">
                            <p>Anja Razafitrimo</p>
                            <p>24 years old</p>
                            <p>Student at Wilde Code School</p>
                        </figcaption>
                    </figure>
                    <figure className="creator">
                        <img className="photo" src="https://i.goopics.net/0naQD.jpg" alt="Cristina" />
                        <figcaption className="photo-description">
                            <p>Cristina Gonzalez</p>
                            <p>22 years old</p>
                            <p>Student at Wilde Code School</p>
                        </figcaption>
                    </figure>
                    <figure className="creator">
                        <img className="photo" src="https://i.goopics.net/JWYRr.png" alt="Joachim" />
                        <figcaption className="photo-description">
                            <p>Joachim Bertrand</p>
                            <p>27 years old</p>
                            <p>Student at Wilde Code School</p>
                        </figcaption>
                    </figure>
                </div>
            </React.Fragment>
        );
    }
}

export default AboutUs;