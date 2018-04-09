import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainSection from './MainSection';
import BookPreview from './BookPreview';
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';
import BooksCatalogue from './BooksCatalogue';
import CategoryItems from './CategoryItems';
import Cart from './Cart';

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
				<Route path="/categoryItem/:id" component={CategoryItems}/>
				<Route path="/cart" component={Cart} />
			</Switch>
		</div>
	</BrowserRouter>
	);
}

export default Index;