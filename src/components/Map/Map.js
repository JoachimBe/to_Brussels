import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  state= {
    location:{
      lat: 50.8504500,
      lng: 4.3487800
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
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={50.8504500}
            lng={4.3487800}
            text={'Bxll'}
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
    this.getLocation()
      .then(location =>{
        this.setState({
          location,
          haveUserLocation: true,
          zoom:16
        })
      })
  }

}

export default SimpleMap;