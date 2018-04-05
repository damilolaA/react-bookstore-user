import React from 'react';
import CommentForm from './CommentForm';

const BookReview = (props) => {	


		let commentsArray = props.bookData.comments,
			comments = [];

		console.log(commentsArray);
		
		if(commentsArray) {
			commentsArray.forEach(comment => {
				console.log(comment);
				comments.push(
					<li className="review">
			          <div className="avatar-def user-image">
			            <h4 className="user-init">SB</h4>
			          </div>
			          <div className="info">
			            <h4 className="username">Sandra Bullock</h4>
			            <p className="comment">
			              {comment.comment}
			            </p>
			          </div>
			        </li>
		        )
			});
		}

		return (
			<div className="book-reviews">
		      <h3 className="header">Reviews</h3>
		      <ul className="review-list">
		        {comments}
		      </ul>
		      <CommentForm bookId={props.bookData._id} />
		    </div>
		)
	
}

export default BookReview;