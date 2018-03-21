import React from 'react';

const Header = () => {

	return (
		<div>
			<div className="top-bar">
		    <div className="top-nav">
		      <a href="index.html"><h3 className="brand"><span>B</span>rain<span>F</span>ood</h3></a>
		      <ul className="top-nav-list">
		        <li className="top-nav-listItem Home"><a href="index.html">Home</a></li>
		        <li className="top-nav-listItem catalogue"><a href="catalogue.html">Catalogue</a></li>
		        <li className="top-nav-listItem login"><a href="login.html">Login</a></li>
		        <li className="top-nav-listItem register"><a href="registration.html">Register</a></li>
		        <li className="top-nav-listItem cart">
		          <div className="cart-item-indicator">
		            <p>12</p>
		          </div>
		          <a href="cart.html">Cart</a>
		        </li>
		      </ul>
		      <form className="search-brainfood">
		        <input type="text" className="text-field" placeholder="Search all books"/>
		      </form>
		    </div>
		  </div>
		</div>
	);
}

export default Header;