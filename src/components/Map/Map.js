import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import icon from './DdeJX.png';
import Pin1 from './comics.png';
import Pin2 from './memorial.png';
import Pin3 from './monument.png';
import Pin4 from './museum.png';
import Pin5 from './streetArt.png'; 
import Api from './index'

let valeurLocation = [];

const Marker = ({ img }) => <div><img src={icon} alt="ici" width="30" heigth="40"/></div>;


const MarkerComics = ({ img }) => <div><img src={Pin1} alt="pinComics" width="30" heigth="40"/></div>;
const MarkerMemorial = ({ img }) => <div><img src={Pin2} alt="pinMemorial" width="30" heigth="40"/></div>;
const MarkerMonument = ({ img }) => <div><img src={Pin3} alt="pinMonument" width="30" heigth="40"/></div>;
const MarkerMuseum = ({ img }) => <div><img src={Pin4} alt="pinMuseum" width="30" heigth="40"/></div>;
const MarkerStreetArt = ({ img }) => <div><img src={Pin5} alt="pinStreetArt" width="30" heigth="40"/></div>;


class SimpleMap extends Component {
  static defaultProps = {
    zoom: 14
  };
  state= {
    location:{
      lat: 50.8503,
      lng: 4.3517
    },
    locations: [],
      zoom: 12,
      haveUsersLocation: false,
    }

  
  render() {
    const position = [this.state.location.lat, this.state.location.lng];
    const pinsValue= this.state.locations.map((elem, index)=>{
      return elem.map((marker, markerIndex) => {
        switch(index){

          case 0 :
          return(
            <MarkerMuseum
            lat={marker.geometry.location.lat}
            lng={marker.geometry.location.lng}
            nam={marker.name}
            />
          )
          case 1 :
          return(
            <MarkerMonument
            lat={marker.geometry.location.lat}
            lng={marker.geometry.location.lng}
            nam={marker.name}
             />
          )
          case 2:
          return(
            <MarkerComics
            lat={marker.geometry.location.lat}
            lng={marker.geometry.location.lng}
            nam={marker.name}
             />
          )
          case 3:
          return(
            <MarkerStreetArt
            lat={marker.geometry.location.lat}
            lng={marker.geometry.location.lng}
            nam={marker.name}
             />
          )
          case 4:
          return(
            <MarkerMemorial 
            lat={marker.geometry.location.lat}
            lng={marker.geometry.location.lng}
            nam={marker.name}
            />
          ) 
          default:
            return;
        }

       
       
      })
    })
    return (
      // Creation de la map et des markers position et lieux
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I' }}
          center={position}
          zoom={this.state.zoom}
        >
          <Marker
            lat={this.state.location.lat}
            lng={this.state.location.lng}
            text={'Hello World!'}
          />
          {pinsValue}

        </GoogleMapReact>
       

             <Api handleApi={(data)=>this.setTable(data)} places={this.props.places}/>

      
        </div>
    );
  }
 /// Recupere les données de API/index.JS
  setTable(data){
    valeurLocation = data
    this.triObj()
  }

    //trie tableau 
  triObj(){
    let tab=[];
    for(let item in valeurLocation){
      tab.push(valeurLocation[item])
    }
    this.setState({
      locations: tab
    });
  }


      //Recuperation de la position GPS
  getLocation = ()=> {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      }, () => {      
        resolve(fetch('https://ipapi.co/json')
          .then(res => res.json())
          .then(location => {
            return {
              lat: location.latitude,
              lng: location.longitude
            };
          }));
      });
    });
  }
      //Assignation de la location au state
  componentDidMount(){
    this.getLocation()
      .then(location =>{
        this.setState({
          location,
          haveUsersLocation: true,
          zoom:16
        })
      })
  }

  // ICI on met le lien pour la carte
  componentDidUpdate(prevProps){
  }

}

export default SimpleMap;