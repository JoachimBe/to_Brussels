import React, { Component } from 'react';

let count = 0;
const locationName = {
  museums: 'museums+in+brussels',
  monument: 'monuments+in+brussels',
  comics: 'memorials+in+brussels',
  streetart: 'street+art+in+brussels',
  memorials: 'parcours+BD+bruxelles'}

  const initialLocation = {
  museums:[],
        monument:[],
        comics:[],
        streetart:[],
        memorials:[]}

class DisplayApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: {
        museums:false,
        monument:false,
        comics:false,
        streetart:false,
        memorials:false
    },
      location: {
        museums:[],
        monument:[],
        comics:[],
        streetart:[],
        memorials:[]
    },
    isReady:true,
      user: {
        "lat": 50.8503,
        "lng": 4.3517
      }
    }
  };
  updateState(data, item){
    const newState = Object.assign({}, this.state.location)
    newState[item] = data;
    this.setState({
      location : newState,
      isReady:true
    })
  }

  callPlaceApi(type, item) {
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${type}&location=${this.state.user.lat},${this.state.user.lng}&radius=${this.state.userdistance}&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`
      , {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then(response => response.json())
      .then(data => {
        this.updateState(data.results, item)
      });
  }

  componentDidUpdate(prevProps, prevState) {

    if(prevProps.places !== this.props.places){
      this.setState({
        places: this.props.places,
        location: initialLocation,
        isReady:false,
      })
    }

    if (prevState.places !== this.state.places) {
      for (let item in this.state.places) {
        if(this.state.location[item].length <= 0){
          this.callPlaceApi(locationName[item], item)
        }
      }
    }
    if (prevState.location !== this.state.location && this.state.isReady) {
      this.props.handleApi(this.state.location)
    }
  }

  render() {
    return <React.Fragment></React.Fragment>
  }
}

export default DisplayApi;