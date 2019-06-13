import React from 'react';

import styles from './App.module.scss'
import Nav from '../Nav/Nav';
import HeroImage from '../HeroImage/HeroImage';
import Container from '../Container/Container';

const App = () => (
	<div className={styles.app}>
		<Nav />
		<HeroImage />
		<Container />
	</div>
);

export default App;