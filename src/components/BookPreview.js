import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import BookDetails from './BookDetails';

class BookPreview extends Component {

	constructor() {
		super()
		this.state = {
			book: ""
		}
	}

	componentWillMount() {
		let id = this.props.match.params.id;
		console.log(id);
		axios.get(`https://bookstoreappapi.herokuapp.com/api/v1/books/${id}`)
			.then(response => {
				this.setState({
					book: response.data
				})
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {

		return(
			<div className="main">
				<Header />
				<BookDetails details={this.state.book}/>
				<Footer />
			</div>
		);
	}
}

export default BookPreview;