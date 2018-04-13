import React, { Component } from 'react';
import axios from 'axios';
import BookList from './BookList';
import Loader from './Loader';

class Trending extends Component {

	constructor() {
		super()
		this.state = {
			trending: "",
			loading: true
		}
	}

	componentDidMount() {
		axios.get('https://bookstoreappapi.herokuapp.com/api/v1/books/getTrending')
			.then(response => {
				let books = response.data
				this.setState({
					trending: books,
					loading: false
				})
			})
			.catch(err => {
				console.log(err);
			}) 
	}

	render() {
		
		if(this.state.loading) {
			return <Loader />;
		}

		return (
			<div>
				<BookList header={this.props.header} trendingBooks={this.state.trending}/>
			</div>
		)
	}
}

export default Trending;