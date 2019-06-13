import React from 'react';

import styles from './searchBar.module.scss';

const SearchBar = () => (
	<label className={styles.searchBar}>
		<i className="search icon"></i>
		<input type="text" />
	</label>
);

export default SearchBar;
