import React, { Component } from 'react';
import axios from 'axios';
import CategoryLink from './CategoryLink';

class SideBar extends Component {
	constructor(props) {
		super(props)
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

	handleLinkClick(id, name) {
		 this.props.handleLinkClick(id, name);
		// console.log(id);
	}

	render() {
		let categories = "",
			categoryItems = [];

		if(this.state.categories) {
			categories = this.state.categories;
			categories.forEach(category => {
				categoryItems.push(
					<CategoryLink key={category._id} handleLinkClick={this.handleLinkClick.bind(this)} category={category} />
				)
			})
		}

		return(
			<div className="side-bar">
			  <div className="categories">
			    <h3 className="header">Categories</h3>
			    <ul className="category-list">
						{categoryItems}
					</ul>
			  </div>
			</div>
		);
	}
}

export default SideBar;
