import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import TopSelling from './TopSelling';
import TrendingBooks from './TrendingBooks';

class Index extends Component {

	render() {
		return (
			<div>
				<Header />
				<TopSelling />
				<TrendingBooks />
				<Footer />
			</div>
		);
	}
}

export default Index;