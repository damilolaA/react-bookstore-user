import React, { Component } from 'react';
import axios from 'axios';
import CategoryList from './CategoryList';

class SideBar extends Component {
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

		return(
			<div className="side-bar">
			    <div className="categories">
			      <h3 className="header">Categories</h3>
			      <CategoryList data={categories} />
			    </div>
			</div>
		);
	}
}

export default SideBar;
