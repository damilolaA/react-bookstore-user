import React, { Component } from 'react';
import axios from 'axios';
import BookList from './BookList';
import Loader from './Loader';

class RecentlyViewed extends Component {

	constructor() {
		super()
		this.state = {
			recentlyViewed: "",
			loading: true
		}
	}

	componentDidMount() {
		axios.get('https://bookstoreappapi.herokuapp.com/api/v1/books/recentlyViewed')
			.then(response => {
				this.setState({
					recentlyViewed: response.data,
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
			   <BookList header="Recently Viewed" trendingBooks={this.state.recentlyViewed}/> 
			</div>
		)
	}
}

export default RecentlyViewed;