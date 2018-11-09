import React from'react';
import './main.css';

class Menu2 extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <form>
                    <p>Course</p>
                    <ol>
                    <li><input type="radio" name="kilometers" value="5">5 Km</input></li>
                    <li><input type="radio" name="kilometers" value="10">10 Km</input></li>
                    <li><input type="radio" name="kilometers" value="15">15 Km</input></li>
                    <li><input type="radio" name="kilometers" value="20">20 Km</input></li>
                    </ol>
                    <input type="radio" name="loop" value='true'>In Loop</input>
                </form>
            </div>
        );
    }
}

export default Menu2;