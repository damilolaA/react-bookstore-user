import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class TopSellingDetails extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			cartData: {},
			errors: {},
			loading: false
		}

		this.handleForm = this.handleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleForm(e) {
		e.preventDefault();
		
		this.postItem();
	}

	handleChange(e) {
		let	quantity = e.target.value,
			item = this.props.details.imagePath,
			//price = this.props.details.price,
			data = {};

		data['item'] = item;
		data['price'] = 50;
		data['quantity'] = quantity;
		
		this.setState({
			cartData: data 
		});
	}

	isNormalInteger(str) {
	    return /^\+?[1-9]\d*$/.test(str);
	}

	validateQuantity() {
		let isValid = true,
			errors = {},
			cartData = this.state.cartData,
			quantity = cartData['quantity'];

		if(!this.isNormalInteger(quantity)) {
			errors['quantity'] = "Please select a quantity";
			isValid = false;
		}

		this.setState({errors: errors});
		return isValid;
	}


	postItem() {
		
		if(this.validateQuantity()) {

			if(this.state.cartData.hasOwnProperty('item')) {
				let cartData = this.state.cartData;
				
				axios({
			        method: 'post',
			        url: 'https://bookstoreappapi.herokuapp.com/api/v1/cart',
			        data: cartData
			    })
			    .then(response => {
			    	this.setState({
			    		loading: true
			    	})
			    })
			    .catch(err => {
			    	console.log(err);
			    })
			}
		}
	}

	displayError(name) {
		return <p style={{color: '#FF0000'}}>{this.state.errors[name]}</p>
	}

	render() {

		if(this.state.loading) {
			return <Redirect to="/cart" />
		}

		const style = {
			backgroundImage: 'url('+this.props.details.imagePath+')',
			backgroundSize: 'contain',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		};

		return(
			<div className="book-display">
		      <div className="display-book" style={style}></div>
		      <div className="info">
		        <h2 className="book-title">{this.props.details.title}</h2>
		        <h3 className="book-author">{this.props.details.author}</h3>
		        <h3 className="book-price">{this.props.details.price}</h3>

		        <form onSubmit={this.handleForm}>
		          {this.state.errors['quantity'] ? this.displayError('quantity') : " "}
		          <label htmlFor="book-amount">Amount</label>
		          <input onChange={this.handleChange} type="number" className="book-amount text-field" name="quantity"/>
		          <input className="def-button add-to-cart" type="submit" name="" value="Add to cart" />
		        </form>
		      </div>
		    </div>
		);
	}
}

export default TopSellingDetails;