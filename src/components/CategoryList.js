import React from 'react';

const CategoryList = (props) => {

	let categories = props.data,
		categoryItems = [];

	if(categories) {
		categories.forEach(category => {
			categoryItems.push(
				<a href="" key={category._id}><li className="category">{category.categoryName}</li></a>
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