import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './App.module.scss'
import Nav from '../Nav/Nav';
import HomePage from '../HomePage/HomePage';
import RecipePage from '../RecipePage/RecipePage';

const App = () => (
	<Router>
		<div className={styles.app}>
			<Nav />
			<Route exact path="/" component={HomePage} />	
			<Route path="/recipe/:id" component={RecipePage} />
		</div>
	</Router>
);

export default App;