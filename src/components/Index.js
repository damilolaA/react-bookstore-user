import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import TopSelling from './TopSelling';

class Index extends Component {

	render() {
		return (
			<div>
				<Header />
				<TopSelling />
				<Footer />
			</div>
		);
	}
}

export default Index;