import React from 'react';

import styles from './Nav.module.scss';
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar';

const Nav = () => (
	<nav className={styles.nav}>
		<Logo />
		<div>
			<SearchBar />
		</div>
	</nav>
);

export default Nav;