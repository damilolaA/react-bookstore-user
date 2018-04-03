import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

class UserReg extends Component {
	constructor() {
		super()
		this.state = {
			userData: {},
			errors: {},
			redirect: false
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.postUserData();
	}	

	handleChange(e) {
		let userData = this.state.userData,
			input = e.target.name;

		userData[input] = e.target.value;
		this.setState(userData);
	}

	validateForm() {
		let userData = this.state.userData,
			errors = {},
			isValid = true;

		if(!userData['firstName']) {
			isValid = false;
			errors['firstName'] = "Please enter your firstname";
		}

		if(!userData['lastName']) {
			isValid = false;
			errors['lastName'] = "Please enter your lastname";
		}

		if(!userData['email']) {
			isValid = false;
			errors['email'] = "Please enter your email address";
		}

		if(!userData['username']) {
			isValid = false;
			errors['username'] = "Please enter your username";
		}

		if(!userData['hash']) {
			isValid = false;
			errors['hash'] = "Please enter your password";
		}

		if(!userData['pword']) {
			isValid = false;
			errors['pword'] = "Please confirm your password";
		}

		if(userData['hash'] !== userData['pword']) {
			isValid = false;
			errors['pword'] = "Passwords do not match, try again";
		}

		this.setState({errors: errors})
		return isValid;
	}

	postUserData() {
		if(this.validateForm()) {
			let userData = this.state.userData;

			axios({
        method: 'post',
        url: 'https://bookstoreappapi.herokuapp.com/api/v1/user',
        data: userData
      })
      .then(response => {
      	if(response) {
      		this.setState({redirect: true});
      	}
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
			return <Redirect to='/login'/>
		}

		return (
			<div style={{backgroundColor: "#808080"}}>
				<Header />
				<div className="main">
				    <div className="registration-form">
				      <form className="def-modal-form" onSubmit={this.handleSubmit}>
				        <label htmlFor="registration-from" className="header"><h3>User Registration</h3></label>

				        <input type="text" name="firstName" className="text-field first-name" onChange={this.handleChange} placeholder="Firstname" />
				        {this.state.errors['firstName'] ? this.displayError('firstName') : " "}

				        <input type="text" name="lastName" className="text-field last-name" onChange={this.handleChange} placeholder="Lastname" />
				        {this.state.errors['lastName'] ? this.displayError('lastName') : " "}

				        <input type="email" name="email" className="text-field email" onChange={this.handleChange} placeholder="Email" />
				        {this.state.errors['email'] ? this.displayError('email') : " "}

				        <input type="text" name="username" className="text-field username" onChange={this.handleChange} placeholder="Username" />
				        {this.state.errors['username'] ? this.displayError('username') : " "}

				        <input type="password" name="hash" className="text-field password" onChange={this.handleChange} placeholder="Password" />
				        {this.state.errors['hash'] ? this.displayError('hash') : " "}

				        <input type="password" name="pword" className="text-field confirm-password" onChange={this.handleChange} placeholder="Confirm Password" />
				        {this.state.errors['pword'] ? this.displayError('pword') : " "}

				        <input type="submit" className="def-button" value="Register" />
				        <p className="login-option">Have an account already? Login</p>
				      </form>
				    </div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default UserReg;