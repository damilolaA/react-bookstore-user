import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import CategoryList from './CategoryList';
import TrendingBooks from './TrendingBooks';
import RecentlyViewed from './RecentlyViewed';

class Catalogue extends Component {

	constructor() {
		super()
		this.state = {
			categories: ""
		}
	}

	componentDidMount() {
		axios.get('https://bookstoreappapi.herokuapp.com/api/v1/category')
			.then(response => {
				this.setState({categories: response.data});
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {

		let categories = "";

		if(this.state.categories) {
			categories = this.state.categories;
		}

		return (
			<div id="catalogue">
				<Header />
				<div className="side-bar">
				    <div className="categories">
				      <h3 className="header">Categories</h3>
				      <CategoryList data={categories} />
				    </div>
				</div>
				<div className="main">
					<TrendingBooks />
				    <RecentlyViewed />
				</div>
				<Footer />
			</div>
		)
	}
}

export default Catalogue;