import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import BookList from './BookList';
import SideBar from './SideBar';

class CategoryItems extends Component {

	constructor(props) {
		super(props)
		this.state = {
			categories: ""
		}
	}

	componentDidMount() {

		if(this.props.match.params.id) {
			let categoryId = this.props.match.params.id;

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
			<div id="catalogue">
				<Header />
				<SideBar />
				<BookList header={""} trendingBooks={this.state.categories}/>
				<Footer />
			</div>
		);
	}
}

export default CategoryItems;
