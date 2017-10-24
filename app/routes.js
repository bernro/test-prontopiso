import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormContainer from './components/Form//FormContainer';

export default (
	<Switch>
		<Route exact path="/" component={FormContainer} />
	</Switch>
);
