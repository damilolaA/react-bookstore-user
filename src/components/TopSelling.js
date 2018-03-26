import React, { Component } from 'react';
import axios from 'axios';
import TopSellingDetails from './TopSelling-Details';

class TopSelling extends Component {

	constructor() {
		super()
		this.state = {
			topSelling: ""
		}
	}

	componentDidMount() {
		axios.get('https://bookstoreappapi.herokuapp.com/api/v1/books/topSelling')
			.then(response => {
				var data = response.data;

				this.setState({
					topSelling: data
				})
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {

		return (
			<div className="main">
				<TopSellingDetails topSelling={this.state.topSelling} />
		    </div>
		);
	}
}

export default TopSelling;