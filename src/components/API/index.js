import React, { Component } from 'react';
import './index.css';

let count = 0;
const locationName = ['museums+in+brussels', 'monuments+in+brussels', 'street+art+in+brussels', 'parcours+BD+bruxelles']
class DisplayApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: {
      museum:true,
      monuments:true
      },
      location: [],
      mapLocation: [],
      user: {
        "lat": 50.8503,
        "lng": 4.3517
      },
      isReady: false
    }
  };

  getPlaces(event) {
    this.setState({
      places: event.target.value,
    });
  }

  getLocation(){
    let direction = this.state.location.map((elem, index) => {
      return elem.geometry.location
    }) 
    this.setState({mapLocation: direction})
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
          location: [...prevState.location, ...data.results]
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
    this.setState({
      isReady : true
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.location !== this.state.location){
      this.getLocation()
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