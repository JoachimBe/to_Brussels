import React from'react';
import './main.css';

class Menu2 extends React.Component{
    constructor(props){
        super(props);
        this.handleShowClick = this.handleShowClick.bind(this);
        this.handleHideClick = this.handleHideClick.bind(this);
        this.state = {visible : true};
    }
    render(){
        const visible = this.state.visible;
        
        return(
            <div className="sideBar">
                <form action="" method="">
                <input type="radio" name="course" value="course_simple"></input><span className="typeParcour" onClick={ev => this.showKilom()}> Course</span>
                    <ol name="listK" className={this.state.display}>
                        <li><input type="radio" name="kilometers" value="5"></input><label for='5'>5 Km</label></li>
                        <li><input type="radio" name="kilometers" value="10"></input><label for='10'>10 Km</label></li>
                        <li><input type="radio" name="kilometers" value="20"></input><label for='15'>15 Km</label></li>
                        <li><input type="radio" name="kilometers" value="15"></input><label for='20'>20 Km</label></li>
                    </ol>
                    <input type="radio" name="loop" value='loop' className={this.state.display}></input><label className={this.state.display}>In Loop</label>
                    <label className="typeParcour lab4input" for='adress'>To an adress:</label>
                    <input type="text" name="adress" required size="3" onClick={ev => this.hideKiloM()}/>
                    
                    <input type="submit" className="buttonTwo" value="Go to map"/>
                </form>
                <button type="button"> Retour</button>
            </div>
        );
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
            this.setState({display : "show"});
        }
    }

    handleShowClick(){
        this.setState({visible : true});
    }
    handleHideClick(){
        this.setState({visible : false});
    }
}

export default Menu2;