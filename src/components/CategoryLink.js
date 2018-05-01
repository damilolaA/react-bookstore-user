import React, { Component } from 'react';

class CategoryLink extends Component {

	constructor(props) {
		super(props)
		this.state = {

		}
	}

	handleClick() {
		let categoryId = this.props.category._id,
			  categoryName = this.props.category.categoryName;

		this.props.handleLinkClick(categoryId, categoryName);
	}

	render() {
		return (
			<div>
				<a onClick={this.handleClick.bind(this)} ><li className="category">{this.props.category.categoryName}</li></a>
			</div>
		);
	}
}

export default CategoryLink;