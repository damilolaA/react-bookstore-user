import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import RecentlyViewed from './RecentlyViewed';
import Trending from './TrendingBooks';

const Catalogue = () => {

	return (
		<div id="catalogue">
			<Header />
			<SideBar />
			<div className="main">
				<Trending/>
				<RecentlyViewed />
			</div>
			<Footer />
		</div>
	)
}

export default Catalogue;