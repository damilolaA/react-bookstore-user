import React, { Component } from 'react';
import axios from 'axios';
import BookList from './BookList';

class Trending extends Component {

	constructor() {
		super()
		this.state = {
			trending: ""
		}
	}

	componentDidMount() {
		axios.get('https://bookstoreappapi.herokuapp.com/api/v1/books/getTrending')
			.then(response => {
				let books = response.data
				this.setState({
					trending: books
				})
			})
			.catch(err => {
				console.log(err);
			}) 
	}

	render() {
		
		return (
			<div>
				<BookList header={this.props.header} trendingBooks={this.state.trending}/>
			</div>
		)
	}
}

export default Trending;