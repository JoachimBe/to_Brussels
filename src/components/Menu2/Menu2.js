import React from'react';
import './main.css';

class Menu2 extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="sidebar">
                <form action="" method="">
                <input className="typeParcour" type="radio" name="course" value="course_simple"></input><span> Course</span>
                    <ol>
                        <li><input type="radio" name="kilometers" value="5"></input><label for='5'>5 Km</label></li>
                        <li><input type="radio" name="kilometers" value="10"></input><label for='10'>10 Km</label></li>
                        <li><input type="radio" name="kilometers" value="20"></input><label for='15'>15 Km</label></li>
                        <li><input type="radio" name="kilometers" value="15"></input><label for='20'>20 Km</label></li>
                    </ol>
                    <p>
                    <input type="radio" name="loop" value='loop'></input>In Loop
                    </p>
                    <label className="typeParcour lab4input" for='adress'>To an adress:</label>
                    <input type="text" name="adress" required size="3"/>
                    
                    <input type="submit" className="buttonTwo" value="Go to map"/>
                </form>
            </div>
        );
    }
}

export default Menu2;