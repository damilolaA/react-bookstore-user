import React, { Component } from 'react';
import axios from 'axios';
import TrendingBooksList from './TrendingBooksList';

class Trending extends Component {

	constructor() {
		super()
		this.state = {
			recentlyViewed: ""
		}
	}

	componentDidMount() {
		axios.get('https://bookstoreappapi.herokuapp.com/api/v1/books/recentlyViewed')
			.then(response => {
				let books = response.data
				this.setState({
					recentlyViewed: books
				})
			})
			.catch(err => {
				console.log(err);
			}) 
	}

	render() {
		console.log(this.state.recentlyViewed);
		return (
			<div className="main">
				<TrendingBooksList trendingBooks={this.state.recentlyViewed}/>
			</div>
		);
	}
}

export default Trending;