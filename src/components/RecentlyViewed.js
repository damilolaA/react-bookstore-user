import React, { Component } from 'react';
import axios from 'axios';
import TrendingBookList from './TrendingBooksList';

class RecentlyViewed extends Component {

	constructor() {
		super()
		this.state = {
			recentlyViewed: ""
		}
	}

	componentDidMount() {
		axios.get('https://bookstoreappapi.herokuapp.com/api/v1/books/recentlyViewed')
			.then(response => {
				this.setState({
					recentlyViewed: response.data
				})
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		return (
			<div>
				<TrendingBookList  trendingBooks={this.state.recentlyViewed}/>
			</div>
		)
	}
}

export default RecentlyViewed;