import React, { Component } from 'react';
import axios from 'axios';
import BookList from './BookList';

class CategoryItems extends Component {

	constructor(props) {
		super(props)
		this.state = {
			categories: ""
		}
	}

	componentDidMount() {
		console.log(this.props);
		if(this.props.match.params.id) {
			let categoryId = this.props.match.params.id;
			console.log(categoryId);
			axios.get(`https://bookstoreappapi.herokuapp.com/api/v1/books/categories/${categoryId}`)
				.then(response => {
					this.setState({
						categories: response.data
					})
				})
				.catch(err => {
					console.log(err);
				})
		}
	}

	render() {

		return(
			<div>
				<BookList header={""} trendingBooks={this.state.categories}/>
			</div>
		);
	}
}

export default CategoryItems;
