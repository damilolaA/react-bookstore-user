import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Checkout extends Component {

	render() {
		let totalPrice = localStorage.getItem('totalPrice');

		return (
			<div id="checkout">
				<Header />
					<div className="main">
					    <div className="checkout-form">
					      <form className="def-modal-form">
					        <div className="total-cost">
					          <h3>${totalPrice} Total Purchase</h3>
					        </div>
					        <div className="cancel-icon close-form"></div>
					        <label htmlFor="login-form" className="header"><h3>Checkout</h3></label>
					        <input type="text"  className="text-field phone" placeholder="Phone Number" />
					        <input type="text" name="addy" className="text-field address" placeholder="Address" />
					        <input type="text" name="code" className="text-field post-code" placeholder="Post Code" />
					        <input type="submit" name="chkt" className="def-button checkout" value="Checkout" />
					      </form>
					    </div>
  					</div>
				<Footer />
			</div>
		);
	}

}

export default Checkout;