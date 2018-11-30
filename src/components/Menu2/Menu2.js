import React from'react';
import './main.css';
import MenuToggleButton from "../ToggleButton/MenuToggleButton.js";






class Menu2 extends React.Component{
    constructor(props){
        super(props);
        this.handleShowClick = this.handleShowClick.bind(this);
        this.handleHideClick = this.handleHideClick.bind(this);
        this.state = {
            visible : true,
            kilometres: 0,
            destination: {
                adress: ''
            }
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    monteDonnee(){
        this.props.valMenu2(this.state)
        }
    
        
    render(){
        const visible = this.state.visible;
        return(
            <div  className={this.props.show ? "side-menu.open" : "sideBar"}>
                    <MenuToggleButton click={this.props.menuClickHandler}/>

                        <img className="logo-dessus" src="https://i.goopics.net/2GKx8.png" alt="logo"></img>

            <div className="contenu">
            <p className="welcome">To Brussels<p className="welcome-text">You can either choose a fixed distance that will take you over a loop course, or enter a destination adress, if you already know where to go ;-)</p> </p>
                <form className="form" action="" method="" onSubmit={this.submitFrom}>
                <p className="typeParcour" onClick={ev => this.showKilom()}>How big is your will to visit ?</p>
                    <ul name="listK" className={this.state.display}>
                        <li><input className="choix-km" type="radio" name="kilometers" value="5" onInput={ev => this.handleChangekilometers(5)}></input><label className="choix-km" htmlFor='5'>5 Km</label></li>
                        <li><input className="choix-km" type="radio" name="kilometers" value="10" onInput={ev => this.handleChangekilometers(10)}></input><label className="choix-km" htmlFor='10'>10 Km</label></li>
                        <li><input className="choix-km" type="radio" name="kilometers" value="20" onInput={ev => this.handleChangekilometers(15)}></input><label className="choix-km" htmlFor='15'>15 Km</label></li>
                        <li><input className="choix-km" type="radio" name="kilometers" value="15" onInput={ev => this.handleChangekilometers(20)}></input><label className="choix-km" htmlFor='20'>20 Km</label></li>
                    </ul>
                    <label className="typeParcour lab4input" for='adress'>Your final destination:</label>
                    <input className="adress" type="text" name="adress" required size="22" value={this.state.adress} onChange={(event) => this.setAdress(event)} onClick={ev => this.hideKiloM()}/>
                    
                    <input type="submit" className="buttonTwo" value="Go to map"/>
                </form> 
                <a className="back" href="#"><img className="back" src="https://i.goopics.net/NNmvW.png" alt="back"></img></a>
                </div>
            </div>
        );
    }

    handleChangekilometers(e){
        this.setState({
            kilometres:e,
            adress: ''
        })
        this.monteDonnee();
        
    }

    setAdress(event){
        this.setState({
            adress: event.target.value,
            kilometres:0
        });
        this.monteDonnee();
    }

    hideKiloM(){
        let nameToHide = document.getElementsByName('listK');
        for(let i = 0; i < nameToHide.length; i++){
            this.setState({display : "hidden"});
        } 
    }
    showKilom(){
        let nameToShow = document.getElementsByName('listK');
        for(let k = 0; k < nameToShow.length; k++){
            this.setState({display : ""});
        }
    }

    handleShowClick(){
        this.setState({visible : true});
    }
    handleHideClick(){
        this.setState({visible : false});
    }
    onChange (e){
        this.setState({
            /////////////////////////////////////////
        });
    }
    submitForm(e){
        e.preventDefault();
    }
}

export default Menu2;