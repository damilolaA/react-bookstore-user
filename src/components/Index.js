import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainSection from './MainSection';
import BookPreview from './BookPreview';


const Index = () => {

	return(
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={MainSection} />
				<Route path="/bookpreview/:id" component={BookPreview} />
			</Switch>
		</div>
	</BrowserRouter>
	);
}

export default Index;