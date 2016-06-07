/**
 * Routes for the APA application
 */
import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import MainContainer from '../containers/MainContainer';
import SplashContainer from '../containers/SplashContainer';
import Start from '../components/start/Start';
import NotFound from '../components/notFound/NotFound';

import globals from '../styles/global/global.scss';
import vars from '../styles/global/vars.scss';
import norms from '../styles/global/normalize.scss';

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={MainContainer}>
			<IndexRoute component={SplashContainer} />
			<Route path="start" component={Start}/>
		</Route>
		<Route path="*" component={NotFound}/>
	</Router>
);


export default routes;