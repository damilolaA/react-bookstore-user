import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import TopSelling from './TopSelling';

class Index extends Component {

	componentDidMount() {
		axios.get('https://bookstoreappapi.herokuapp.com/api/v1/books')
			.then(response => {
				console.log(response.data);
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		return (
			<div>
				<Header />
				<TopSelling />
				<Footer />
			</div>
		);
	}
}

export default Index;