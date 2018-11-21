import React from'react';
import './main.css';


function visibleCourseList(props){
    if(!props.visibleList){
        return null;
    }
    return (<div>
        <ol name="listK" className={this.state.display}>
            <li><input type="radio" name="kilometers" value="5"></input><label for='5'>5 Km</label></li>
            <li><input type="radio" name="kilometers" value="10"></input><label for='10'>10 Km</label></li>
            <li><input type="radio" name="kilometers" value="20"></input><label for='15'>15 Km</label></li>
            <li><input type="radio" name="kilometers" value="15"></input><label for='20'>20 Km</label></li>
        </ol>
    <input type="radio" name="loop" value='loop' className={this.state.display}></input><label className={this.state.display}>In Loop</label></div>);
}

class Menu2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {visible : true};
        this.hideToggleClick = this.hideToggleClick.bind(this);
    }

    hideToggleClick(){
        this.setState(state =>({
            visible: !state.visible
        }));
    }

    render(){
        return(
            <div className="sideBar">
                <form action="" method="">
                <input type="radio" name="course" value="course_simple"></input><span className="typeParcour" onClick={this.state.visible}> Course</span>
                    
                    <visibleCourseList visible={this.state.visible}/>
                    <label className="typeParcour lab4input" for='adress'>To an adress:</label>
                    <input type="text" name="adress" required size="3" onClick={this.state.visible}/>
                    
                    <input type="submit" className="buttonTwo" value="Go to map"/>
                </form>
            </div>
        );
    }



    handleShowClick(){
        this.setState({visible : true});
    }
    handleHideClick(){
        this.setState({visible : false});
    }
}

ReactDom.render(
    <Menu2 />,
    document.getElementById('')
);

export default Menu2;