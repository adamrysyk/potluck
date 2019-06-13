import React from 'react';

import styles from './App.module.scss'
import Nav from '../Nav/Nav';
import HeroImage from '../HeroImage/HeroImage';
import RecipesListContainer from '../../containers/RecipesListContainer/RecipesListContainer';

const App = () => (
	<div className={styles.app}>
		<Nav />
		<HeroImage />
		<RecipesListContainer />
	</div>
);

export default App;