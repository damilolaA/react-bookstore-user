import React from 'react';
import CommentForm from './CommentForm';

const BookReview = (props) => {	

		let commentsArray = props.bookData.comments,
			userName = localStorage.getItem('name'),
			info = userName.split(" "),
			initials = "",
			comments = [];
		
		for(var i = 0; i < info.length; i++) {
			initials += info[i].substring(0, 1);
		}

		if(commentsArray) {
			commentsArray.forEach(comment => {
				comments.push(
					<li key={comment._id} className="review">
			          <div className="avatar-def user-image">
			            <h4 className="user-init">{initials}</h4>
			          </div>
			          <div className="info">
			            <h4 className="username">{userName ? userName : ""}</h4>
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