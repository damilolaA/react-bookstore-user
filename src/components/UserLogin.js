import React from 'react';
import Header from './Header';
import Footer from './Footer';

const UserLogin = () => {

	return (
		<div style={{backgroundColor: "#808080", height:"620px"}} >
			<Header />
			<div className="main">
			    <div className="login-form">
			      <form className="def-modal-form">
			        <label htmlFor="login-form" className="header"><h3>User Login</h3></label>
			        <input type="text" className="text-field email" placeholder="Email"/>
			        <input type="password" className="text-field password" placeholder="Password"/>
			        <input type="submit" className="def-button login" value="Login"/>
			      </form>
			    </div>
			</div>
			<Footer/>
		</div>
	)
}

export default UserLogin;