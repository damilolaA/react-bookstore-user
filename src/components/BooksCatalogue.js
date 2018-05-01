import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import RecentlyViewed from './RecentlyViewed';
import Trending from './TrendingBooks';
import BookList from './BookList';

class Catalogue extends Component {

	constructor(props) {
		super(props)
		this.state = {
			categories: "",
			isCategory: false,
			catName: ""
		}

		this.handleLinkClick = this.handleLinkClick.bind(this)
	}

	handleLinkClick(id, name) {

		axios.get(`https://bookstoreappapi.herokuapp.com/api/v1/books/categories/${id}`)
			.then(response => {
				if(response) {
					this.setState({
						categories: response.data,
						isCategory: true,
						catName: name
					})
				}
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		return (
			<div id="catalogue">
				<Header />
				<SideBar handleLinkClick={this.handleLinkClick} />
				<div className="main">
					{this.state.isCategory ? <BookList header={this.state.catName} trendingBooks={this.state.categories} /> : <Trending />}
					<RecentlyViewed />
				</div>
				<Footer />
			</div>
		)
	}
}

export default Catalogue;