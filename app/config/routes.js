/**
 * Routes for the APA application
 */
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Start from '../components/start/Start';

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Start}>
		</Route>
	</Router>
);


export default routes;