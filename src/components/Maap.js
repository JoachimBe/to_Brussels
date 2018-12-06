import React from 'react';
import MyMapComponent from './MyMapComponent';

class Maap extends React.Component{
    render(){
        return(
            <MyMapComponent stops = {this.props.stops}></MyMapComponent>
        )
    }

}

export default Maap;