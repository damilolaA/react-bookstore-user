import React from 'react';

const TopSellingDetails = (props) => {
	
	var style = {
		backgroundImage: 'url('+props.details.imagePath+')',
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
	};

	return(
		<div className="book-display">
	      <div className="display-book" style={style}></div>
	      <div className="info">
	        <h2 className="book-title">{props.details.title}</h2>
	        <h3 className="book-author">{props.details.author}</h3>
	        <h3 className="book-price">{props.details.price}</h3>

	        <form>
	          <label htmlFor="book-amount">Amount</label>
	          <input type="number" className="book-amount text-field" />
	          <input className="def-button add-to-cart" type="submit" name="" value="Add to cart" />
	        </form>
	      </div>
	    </div>
	);
}

export default TopSellingDetails;