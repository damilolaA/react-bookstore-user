import React, { Component } from 'react';
import axios from 'axios';

class CartItems extends Component {

	constructor() {
		super()
		this.state = {
			cartItems: ""
		}
	}

	componentDidMount() {
		axios.get('https://bookstoreappapi.herokuapp.com/api/v1/cart')
			.then(response => {
				this.setState({
					cartItems: response.data
				})
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {

		let itemsList = [];

		const removeItem = (item, i) => {

			let items = this.state.cartItems;

			items.splice(i, 1);

			this.setState({items});

		    let id = item._id;

		    deleteItem(id);
		};

		const deleteItem = id => {
		    if (id) {
		      axios({
		        method: 'delete',
		        url: `https://bookstoreappapi.herokuapp.com/api/v1/cart/${id}`,
		        data: null
		      })
		        .then(response => {
		          console.log(response);
		        })
		        .catch(err => {
		          console.log(err);
		        });
		    }
	    };

		if(this.state.cartItems) {
			let cartLength = this.state.cartItems.length,
				totalPrice = 0;

			localStorage.setItem('cartLength', cartLength);

			this.state.cartItems.forEach((item, i) => {

				totalPrice = +item.total + +totalPrice;

				itemsList.push(
					<tr key={i}>
						<td><div className="book-cover" 
								style={{
					 				backgroundImage: 'url(' + item.item + ')', 
					 				backgroundSize: 'cover', 
					 				backgroundPosition: 'center',
					 				backgroundRepeat: 'no-repeat'
					 			}}></div>
						</td>
				          <td><p className="book-price">${item.price}</p></td>
				          <td><p className="quantity">{item.quantity}</p></td>
				          <td><p className="total">${item.total}</p></td>
				          <td>
				            <form className="update">
				              <input type="number" className="text-field qty" />
				              <input type="submit" className="def-button change-qty" value="Change Qty" />
				            </form>
				          </td>
				          <td>
				            <a onClick={() => {removeItem(item, i)}} key={i} 
				            	className="def-button remove-item">Remove Item</a>
				          </td>
			        </tr>
				)
			})
			localStorage.setItem('totalPrice', totalPrice);
		}

		return(
			<tbody>
				{itemsList}
			</tbody>
		)
	}
}

export default CartItems;