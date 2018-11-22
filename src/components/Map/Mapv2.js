import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    state ={
        location: {
        lat: 50.8504500,
        lng: 4.3487800
      },
      haveUsersLocation:false,
      zoom: 11

  }
}

  render() {
    const position = [this.state.location.lat, this.state.location.lng]
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I' }}
          defaultCenter={position}
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
}

export default SimpleMap;