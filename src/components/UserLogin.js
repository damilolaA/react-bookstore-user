import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class UserLogin extends Component {
	constructor() {
		super()
		this.state = {
			loginData: {},
			errors: {},
			redirect: false
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.authenticateUser();
	}

	handleChange(e) {
		let loginData = this.state.loginData,
			input = e.target.name;

		loginData[input] = e.target.value;
		this.setState({loginData});
	}

	validateForm() {
		let loginData = this.state.loginData,
			errors = {},
			isValid = true;

		if(!loginData['email']) {
			isValid = false;
			errors['email'] = "Please provide your email";
		}

		if(!loginData['password']) {
			isValid = false;
			errors['password'] = "Please provide your password";
		}

		this.setState({errors: errors});
		return isValid;
	}

	authenticateUser() {
		if(this.validateForm()) {
			let userDetails = this.state.loginData;

			axios({
		        method: 'post',
		        url: 'https://bookstoreappapi.herokuapp.com/api/v1/userAuth',
		        data: userDetails
		    })
		    .then(response => {
		    	let token = response.data._token,
		    		userId = response.data._id;

		    	localStorage.setItem("userId", userId);
		    	localStorage.setItem("userToken", token);
		    	this.setState({redirect: true});
		    })
		    .catch(err => {
		    	console.log(err);
		    })
		}
	}
 
	displayError(name) {
		return <p className="form-error">{this.state.errors[name]}</p>
	}

	render() {

		if(this.state.redirect) {
			return <Redirect to="/" />
		}

		return (
			<div style={{backgroundColor: "#808080", height:"620px"}} >
				<Header />
				<div className="main">
				    <div className="login-form">
				      <form className="def-modal-form" onSubmit={this.handleSubmit}>
				        <label htmlFor="login-form" className="header"><h3>User Login</h3></label>
				        <input type="text" name="email" onChange={this.handleChange} className="text-field email" placeholder="Email"/>
				        {this.state.errors['email'] ? this.displayError('email') : " "}
				        <input type="password" name="password" onChange={this.handleChange} className="text-field password" placeholder="Password"/>
				        {this.state.errors['password'] ? this.displayError('password') : " "}
				        <input type="submit" className="def-button login" value="Login"/>
				      </form>
				    </div>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default UserLogin;