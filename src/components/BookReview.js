import React from 'react';

const BookReview = () => {

	return (
		<div className="book-reviews">
	      <h3 className="header">Reviews</h3>
	      <ul className="review-list">
	        <li className="review">
	          <div className="avatar-def user-image">
	            <h4 className="user-init">SB</h4>
	          </div>
	          <div className="info">
	            <h4 className="username">Sandra Bullock</h4>
	            <p className="comment">
	              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
	              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
	              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	            </p>
	          </div>
	        </li>
	      </ul>
	      <div className="add-comment">
	        <h3 className="header">Add your comment</h3>
	        <form className="comment">
	          <textarea className="text-field" placeholder="write something"></textarea>
	          <button className="def-button post-comment">Upload comment</button>
	        </form>
	      </div>
	    </div>
	)
}

export default BookReview;