import React from 'react';

const TopSelling = () => {
	return (
		<div className="main">
			<div className="book-display">
		      <div className="display-book"></div>
		      <div className="info">
		        <h2 className="book-title">Eloquent Javascript</h2>
		        <h3 className="book-author">by Marijn Haverbeke</h3>
		        <h3 className="book-price">$200</h3>

		        <form>
		          <label htmlFor="book-amout">Amount</label>
		          <input type="number" className="book-amount text-field" />
		          <input className="def-button add-to-cart" type="submit" name="" value="Add to cart" />
		        </form>
		      </div>
		    </div>
	    </div>
	);
}

export default TopSelling;