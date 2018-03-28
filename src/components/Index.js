import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';


class Index extends Component {

	render() {
		return (
			<div>
				<Header />
				<MainSection />
				<Footer />
			</div>
		);
	}
}

export default Index;