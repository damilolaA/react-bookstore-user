import React from 'react';
import CommentForm from './CommentForm';

const BookReview = (props) => {
	
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
	      <CommentForm bookId={props.bookData._id} />
	    </div>
	)
}

export default BookReview;