import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TopSelling from './TopSelling';
import TrendingBooks from './TrendingBooks';
import RecentlyViewed from './RecentlyViewed';

const MainSection = () => {

	return (
		<div className="main">
			<Header />
			<TopSelling />
			<TrendingBooks header='Trending'/>
			<RecentlyViewed />
			<Footer />
		</div>
	)
}

export default MainSection;