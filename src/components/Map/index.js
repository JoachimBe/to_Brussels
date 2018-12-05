import React, { Component } from 'react';

const tab = [2, 3, 4];
let count = 0;
const locationName = ['museums+in+brussels', 'monuments+in+brussels', 'memorials+in+brussels', 'street+art+in+brussels', 'parcours+BD+bruxelles']
class DisplayApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: {
        museums:true,
        monuments:true
      },
      location: [],
      user: {
        "lat": 50.8503,
        "lng": 4.3517
      }
    }
  };

  getPlaces(event) {
    this.setState({
      places: event.target.value,
    });
  }

  callPlaceApi(type) {
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${type}&location=${this.state.user.lat},${this.state.user.lng}&radius=${this.state.userdistance}&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`
      , {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          location: [...prevState.location, [...data.results]]
        }));
      });
  }

  componentDidMount() {
    for (let item in this.state.places) {
      if (this.state.places[item]) {
        this.callPlaceApi(locationName[count])
      }
      count++
    }
  }

  componentDidUpdate(){
    if(prevState.location !== this.state.location){
      this.props.handleApi(this.state.location)
      console.log('In INDEX did mount', this.state.location )
    }

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p onChange={event => this.getPlaces(event)} >text</p>
        </header>
      </div>
    );
  }
}

export default DisplayApi;