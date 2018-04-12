import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartItems from './CartItems';

const Cart = () => {

	return (
		<div>
			<Header />
			<div className="main">
				<table className="cart-table">
				  <thead>
				    <tr>
				      <th><h3>Item</h3></th>
				      <th><h3>Price</h3></th>
				      <th><h3>Quantity</h3></th>
				      <th><h3>Total</h3></th>
				      <th><h3>Update</h3></th>
				      <th><h3>Remove</h3></th>
				    </tr>
				  </thead>
				  
				    <CartItems />
				   
				</table>
				<div className="cart-table-actions">
			      <Link to="/checkout"><button className="def-button checkout">Checkout</button></Link>
			    </div>
			</div>
			<Footer />
		</div>
	)
}

export default Cart;