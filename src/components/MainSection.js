import React from 'react';
import TopSelling from './TopSelling';
import TrendingBooks from './TrendingBooks';
import RecentlyViewed from './RecentlyViewed';

const MainSection = () => {

	return (
		<div className="main">
			<TopSelling />
			<TrendingBooks />
			<RecentlyViewed />
		</div>
	)
}

export default MainSection;