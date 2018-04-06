import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainSection from './MainSection';
import BookPreview from './BookPreview';
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';
import BooksCatalogue from './BooksCatalogue';

const Index = () => {

	return(
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={MainSection} />
				<Route path="/bookpreview/:id" component={BookPreview} />
				<Route path="/register" component={UserRegistration} />
				<Route path="/login" component={UserLogin} />
				<Route path="/catalogue" component={BooksCatalogue} />
			</Switch>
		</div>
	</BrowserRouter>
	);
}

export default Index;