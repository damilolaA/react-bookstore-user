import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			comment: {},
			errors: {},
			userId: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.postComment();
	}

	handleChange(e) {
		let comment = this.state.comment,
			name = e.target.name;

		let userId = localStorage.getItem('userId');
		this.setState({userId: userId})

		comment[name] = e.target.value;
		comment['bookId'] = this.props.bookId;
		comment['userId'] = userId;

		this.setState({comment: comment});
	}

	validateUser() {
		let userId = localStorage.getItem('userId'),
			comment = this.state.comment,
			isValid = true,
			errors = {};

		if(!userId) {
			errors['login'] = "Please login to write a comment";
			isValid = false;
		}

		if(!comment['comment']) {
			errors['comment'] = "Please enter a comment";
			isValid = false
		}

		this.setState({errors: errors});
		return isValid;
	}

	postComment() {
		if(this.validateUser()) {
			let comment = this.state.comment;
			axios({
				method: 'post',
				url: 'https://bookstoreappapi.herokuapp.com/api/v1/comment',
				data: comment
			})
			.then(response => {
				this.setState({loading: true});
			})
			.catch(err => {
				console.log(err);
			})
		}
	}

	displayError(name) {
		return <span style={{color: '#FF0000'}}>{this.state.errors[name]}</span>
	}

 	render() {
 		if(this.state.loading) {
 			return <Redirect to='/' />
 		}
		return (
			<div className="add-comment">
		        <h3 className="header">Add your comment</h3>
		        <form className="comment" onSubmit={this.handleSubmit}>
		          {this.state.errors['login'] ? this.displayError('login') : this.displayError('comment')}
		          <textarea className="text-field" name="comment" onChange={this.handleChange} placeholder="write something"></textarea>
		          <button className="def-button post-comment">Upload comment</button>
		        </form>
		    </div>
		);
	}
}

export default Form;