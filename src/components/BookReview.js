import React from 'react';
import CommentForm from './CommentForm';

const BookReview = (props) => {	

		let commentsArray = props.bookData.comments,
			comments = [];

		if(commentsArray) {
			commentsArray.forEach(comment => {
				let initials = "";
					
				if(comment.fullName) {
					let username = comment.fullName;

					let name = username.split(" ");

					for(var i = 0; i < name.length; i++) {
						console.log(initials);
						initials += name[i].substring(0, 1);
					}
				}

				comments.push(
					<li key={comment._id} className="review">
			          <div className="avatar-def user-image">
			            <h4 className="user-init">{initials ? initials : ""}</h4>
			          </div>
			          <div className="info">
			            <h4 className="username">{comment.fullName}</h4>
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