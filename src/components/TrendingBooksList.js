import React from 'react';

const TrendingBooksList = (props) => {

	let books = [];

	if(props.trendingBooks) {
		props.trendingBooks.forEach(book => {
			books.push(
			 <li className="book">
			 	<a href="">
			 		<div className="book-cover" 
			 			style={{
			 				backgroundImage: 'url(' + book.imagePath + ')', 
			 				backgroundSize: 'cover', 
			 				backgroundPosition: 'center',
			 				backgroundRepeat: 'no-repeat'
			 			}}>
			 		</div>
			 	</a>
          		<div className="book-price"><p>{book.price}</p></div>
			 </li>
			)
		})
	}

	return (	
		<div className="trending-books horizontal-book-list">
	      <h3 className="header">Trending</h3>
	      <ul className="book-list">
	      	{books}
	      </ul>
		</div>
	)
}

export default TrendingBooksList;