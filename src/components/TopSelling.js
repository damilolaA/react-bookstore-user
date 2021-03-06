import React, { Component } from 'react';
import axios from 'axios';
import BookDetails from './BookDetails';
import Loader from './Loader';

class TopSelling extends Component {

	constructor() {
		super()
		this.state = {
			topSelling: "",
			loading: true
		}
	}

	componentDidMount() {
		axios.get('https://bookstoreappapi.herokuapp.com/api/v1/books/topSelling')
			.then(response => {
				var data = response.data;

				this.setState({
					topSelling: data,
					loading: false
				})
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {

		if(this.state.loading) {
			return <Loader />
		}
		
		return (
			<div>
				<BookDetails details={this.state.topSelling} />
		    </div>
		);
	}
}

export default TopSelling;