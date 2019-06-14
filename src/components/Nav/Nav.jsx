import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Nav.module.scss';
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar';

const Nav = () => (
	<nav className={styles.nav}>
		<Link to={"/"}>
			<Logo />
		</Link>
		<div>
			<SearchBar />
		</div>
	</nav>
);

export default Nav;