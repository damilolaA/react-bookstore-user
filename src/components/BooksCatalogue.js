import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import CategoryList from './CategoryList';
import RecentlyViewed from './RecentlyViewed';
import Trending from './TrendingBooks';
import CategoryItems from './CategoryItems';

class Catalogue extends Component {

	constructor() {
		super()
		this.state = {
			categories: "",
			bookCategories: ""
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

		/*let catId;
		if(this.props.location.pathname) {
			let pathname = this.props.location.pathname,
				pathnameArr = pathname.split('/'),
				catId = pathnameArr[2];

			console.log(catId);
		}*/

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
					{ this.props.match.params.id ? <CategoryItems /> : <Trending/>}
					<RecentlyViewed />
				</div>
				<Footer />
			</div>
		)
	}
}

export default Catalogue;