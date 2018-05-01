import React from 'react';
import { Link } from 'react-router-dom';

const TrendingBooksList = (props) => {

	let books = [];
	
	if(props.trendingBooks) {
		props.trendingBooks.forEach(book => {
			books.push(
			 <li key={book._id} className="book">
			 	<Link to={`/bookpreview/${book._id}`}>
			 		<div className="book-cover" 
			 			style={{
			 				backgroundImage: 'url(' + book.imagePath + ')', 
			 				backgroundSize: 'cover', 
			 				backgroundPosition: 'center',
			 				backgroundRepeat: 'no-repeat'
			 			}}>
			 		</div>
			 		<div className="book-price"><p>{book.price}</p></div>
			 	</Link>
			 </li>
			)
		})
	}

	return (	
		<div className="trending-books horizontal-book-list">
	      <h3 className="header">{props.header}</h3>
	      <ul className="book-list">
	      	{books}
	      </ul>
		</div>
	)
}

export default TrendingBooksList;