import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import icon from './DdeJX.png';
import Pin1 from './comics.png';
import Pin2 from './memorial.png';
import Pin3 from './monument.png';
import Pin4 from './museum.png';
import Pin5 from './streetArt.png';

const valeurLocation = [
  {
    location:{
    lat: 50.833343, 
    lng:4.366629
    }
  }
  ,
  {
    location:{
    lat:50.8301436,
    lng:4.3402184
    }
  }
  ,
  {
    location:{
      lat:50.813433,
      lng:4.324834
      }
  }
  ,
  {
    location:{
      lat:50.7875382,
      lng:4.3164506
    }
  }
  ,
  {
    location:{
      lat:50.771023,
      lng:4.311616
      }
  }
]
const Marker = ({ img }) => <div><img src={icon} alt="ici" width="30" heigth="40"/></div>;

const MarkerComics = ({ img }) => <div><img src={Pin1} alt="pinComics" width="30" heigth="40"/></div>;
const MarkerMemorial = ({ img }) => <div><img src={Pin2} alt="pinMemorial" width="30" heigth="40"/></div>;
const MarkerMonument = ({ img }) => <div><img src={Pin3} alt="pinMonument" width="30" heigth="40"/></div>;
const MarkerMuseum = ({ img }) => <div><img src={Pin4} alt="pinMuseum" width="30" heigth="40"/></div>;
const MarkerStreetArt = ({ img }) => <div><img src={Pin5} alt="pinStreetArt" width="30" heigth="40"/></div>;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 14
  };
  state= {
    location:{
      lat: 50.8503,
      lng: 4.3517
    },
      zoom: 12,
      haveUsersLocation: false,
    }

  
  render() {
    const position = [this.state.location.lat, this.state.location.lng];
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I' }}
          center={position}
          zoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={50.8504500}
            lng={4.3487800}
            text={'Bxll'}
          />
          <Marker
            lat={this.state.location.lat}
            lng={this.state.location.lng}
            text={'Hello World!'}
          />
          <MarkerComics
            lat={valeurLocation[0].location.lat}
            lng={valeurLocation[0].location.lng}
            text={'Comics'}
            />
          <MarkerMemorial
            lat={valeurLocation[1].location.lat}
            lng={valeurLocation[1].location.lng}
            text={'Memorial'}
          />

          <MarkerMonument 
            lat={valeurLocation[2].location.lat}
            lng={valeurLocation[2].location.lng}
          />

          <MarkerMuseum 
          lat={valeurLocation[3].location.lat}
          lng={valeurLocation[3].location.lng}
          />
          <MarkerStreetArt 
          lat={valeurLocation[4].location.lat}
          lng={valeurLocation[4].location.lng}
          />

        </GoogleMapReact>
        </div>
    );
  }
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
  componentDidMount(){
    console.log('1 have user loc ? :', this.state.haveUsersLocation);
    console.log(this.state.location);
    this.getLocation()
      .then(location =>{
        this.setState({
          location,
          haveUsersLocation: true,
          zoom:16
        })
      })
    console.log(this.state.location);
    console.log('2 have user loc', this.state.haveUsersLocation)
  }

}

export default SimpleMap;