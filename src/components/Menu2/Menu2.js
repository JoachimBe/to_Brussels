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
                    <li><input type="radio" name="kilometers" value="5"></input>5 Km</li>
                    <li><input type="radio" name="kilometers" value="10"></input>10 Km</li>
                    <li><input type="radio" name="kilometers" value="15"></input>15 Km</li>
                    <li><input type="radio" name="kilometers" value="20"></input>20 Km</li>
                    </ol>
                </form>
            </div>
        );
    }
}

export default Menu2;