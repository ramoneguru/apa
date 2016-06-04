/**
 * Routes for the APA application
 */
import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Main from '../components/Main';
import Splash from '../components/splash/Splash';
import Start from '../components/start/Start';
import NotFound from '../components/notFound/NotFound';

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Splash} />
			<Route path="start" component={Start}/>
		</Route>
		<Route path="*" component={NotFound}/>
	</Router>
);


export default routes;