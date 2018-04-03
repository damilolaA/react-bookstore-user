import React from 'react';
import Header from './Header';
import Footer from './Footer';

const UserReg = () => {

	return (
		<div style={{backgroundColor: "#808080"}}>
			<Header />
			<div className="main">
			    <div className="registration-form">
			      <form className="def-modal-form">
			        <label for="registration-from" className="header"><h3>User Registration</h3></label>
			        <input type="text" className="text-field first-name" placeholder="Firstname" />
			        <input type="text" className="text-field last-name" placeholder="Lastname" />
			        <input type="email" className="text-field email" placeholder="Email" />
			        <input type="text" className="text-field username" placeholder="Username" />
			        <input type="password" className="text-field password" placeholder="Password" />
			        <input type="password" className="text-field confirm-password" placeholder="Confirm Password" />
			        <input type="submit" className="def-button" value="Register" />
			        <p className="login-option">Have an account already? Login</p>
			      </form>
			    </div>
			</div>
			<Footer />
		</div>
	)
}

export default UserReg;