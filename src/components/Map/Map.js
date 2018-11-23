import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 14
  };
  state= {
    location:{
      lat: 0,
      lng: 0
    },
      zoom: 2,
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
            lat={this.state.lat}
            lng={this.state.lng}
            text={'Hello World!'}
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