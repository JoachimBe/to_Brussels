import React from 'react';
import './main.css';
import MenuToggleButton from "../ToggleButton/MenuToggleButton.js";
import { NavLink } from "react-router-dom";
import Toolbar from '../Toolbar/Toolbar.js';

class Menu2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowClick = this.handleShowClick.bind(this);
        this.handleHideClick = this.handleHideClick.bind(this);
        this.state = { visible: true };
    }
    render() {
        return (
            <React.Fragment>
                 <Toolbar/>
            <nav className={this.props.show ? "sideBar open" : "sideBar"}>
                    <MenuToggleButton click={this.props.menuClickHandler} />
                    <img className="logo-dessus" src="https://i.goopics.net/2GKx8.png" alt="logo"></img>
                    <div className="contenu">
                        <p className="welcome">To Brussels<p className="welcome-text">You can either choose a fixed distance that will take you over a loop course, or enter a destination adress, if you already know where to go ;-)</p> </p>
                        <form className="form" action="" method="">
                            <p className="typeParcour" onClick={ev => this.showKilom()}>How big is your will to visit ?</p>
                            <ul name="listK" className={this.state.display}>
                                <li><input className="choix-km" type="radio" name="kilometers" value="5"></input><label className="choix-km" for='5'>5 Km</label></li>
                                <li><input className="choix-km" type="radio" name="kilometers" value="10"></input><label className="choix-km" for='10'>10 Km</label></li>
                                <li><input className="choix-km" type="radio" name="kilometers" value="20"></input><label className="choix-km" for='15'>15 Km</label></li>
                                <li><input className="choix-km" type="radio" name="kilometers" value="15"></input><label className="choix-km" for='20'>20 Km</label></li>
                            </ul>
                            <label className="typeParcour lab4input" for='adress'>Your final destination:</label>
                            <input className="adress" type="text" name="adress" required size="22" onClick={ev => this.hideKiloM()} />
                            <input type="submit" className="buttonTwo" value="Let's Go !" />
                        </form>
                        <NavLink to="/map" className="back" ><img className="back" src="https://i.goopics.net/NNmvW.png" alt="back"></img></NavLink>
                    </div>               
            </nav>
            </React.Fragment>
        );
    }

    hideKiloM() {
        let nameToHide = document.getElementsByName('listK');
        for (let i = 0; i < nameToHide.length; i++) {
            this.setState({ display: "hidden" });
        }
    }
    showKilom() {
        let nameToShow = document.getElementsByName('listK');
        for (let k = 0; k < nameToShow.length; k++) {
            this.setState({ display: "" });
        }
    }

    handleShowClick() {
        this.setState({ visible: true });
    }
    handleHideClick() {
        this.setState({ visible: false });
    }
}

export default Menu2;