import React, { Component } from 'react';
import axios from 'axios';

class TopSelling extends Component {

	constructor() {
		super()
		this.state = {
			topSelling: ""
		}
	}

	componentDidMount() {
		axios.get('https://bookstoreappapi.herokuapp.com/api/v1/books/topSelling')
			.then(response => {
				var data = response.data;

				this.setState({
					topSelling: data
				})
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {

		var topSelling = "";

		if(this.state.topSelling) {
			topSelling = this.state.topSelling;
		}

		console.log(topSelling);
		var style = {
			background: 'url('+ topSelling.imagePath + ')',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		};

		return (
			<div className="main">
				<div className="book-display">
			      <div className="display-book" style={style}></div>
			      <div className="info">
			        <h2 className="book-title">{topSelling.title}</h2>
			        <h3 className="book-author">{topSelling.author}</h3>
			        <h3 className="book-price">{topSelling.price}</h3>

			        <form>
			          <label htmlFor="book-amout">Amount</label>
			          <input type="number" className="book-amount text-field" />
			          <input className="def-button add-to-cart" type="submit" name="" value="Add to cart" />
			        </form>
			      </div>
			    </div>
		    </div>
		);
	}
}

export default TopSelling;