import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"https://maps.googleapis.com/maps/api/js?key= AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I&callback=initMap" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={50.511}
            lng={4.2055}
            text={'BXll'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;