import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

	return (
		<div>
			<div className="top-bar">
		    <div className="top-nav">
		      <a href="index.html"><h3 className="brand"><span>B</span>rain<span>F</span>ood</h3></a>
		      <ul className="top-nav-list">
		        <li className="top-nav-listItem Home"><Link to="/">Home</Link></li>
		        <li className="top-nav-listItem catalogue"><Link to="/catalogue">Catalogue</Link></li>
		        <li className="top-nav-listItem login"><Link to="/login">Login</Link></li>
		        <li className="top-nav-listItem register"><Link to="/register">Register</Link></li>
		        <li className="top-nav-listItem cart">
		          <div className="cart-item-indicator">
		            <p>12</p>
		          </div>
		          <Link to="cart.html">Cart</Link>
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