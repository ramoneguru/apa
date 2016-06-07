/**
 * Splash screen component that renders when the user lands on the app.
 */

import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import Header from '../header/Header';


import { styles } from './splash.scss';

const Splash = (props) => {
	return (
		<div className="splash">
			<HeaderContainer>
				<Header
					title={props.title}
				/>
			</HeaderContainer>
		</div>
	)
}

export default Splash;
