import React, {Component} from 'react';

class Parcours extends Component {
	constructor(props) {
		super(props)
		this.state = {
			places: {},
			location: [],
			user: {
			  "lat": 50.8503,
			  "lng": 4.3517
			}
		  }
	}

	componentDidMount() {
		fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.user.lat},${this.state.user.lng}&destination=${this.state.user.lat},${this.state.user.lng}&waypoints=optimize:true|${type}&mode=walking&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`
			, {
				headers: {
					'Access-Control-Allow-Origin': '*',
				}
			})
		  .then(response => response.json())
			.then(data => {
				this.setState({
					location: data.results
				});
			});
	}

	render() {
		return (
			<div>

			</div>
		)
	}
}

export default Parcours;