import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = (props) => {

	let categories = props.data,
		categoryItems = [];

	if(categories) {
		categories.forEach(category => {
			categoryItems.push(
				<Link to={`/categoryItem/${category._id}`} key={category._id}><li className="category">{category.categoryName}</li></Link>
			)
		})
	}

	return (
		<ul className="category-list">
			{categoryItems}
		</ul>
	);
}

export default CategoryList;