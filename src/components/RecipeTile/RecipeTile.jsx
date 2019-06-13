import React from 'react';

import styles from './recipeTile.module.scss';


const RecipeTile = ({ recipe }) => (
	<div className={styles.recipeTile}>
		<h2>
			{recipe.name}
		</h2>
		<img src={`${process.env.PUBLIC_URL}/recipeTiles/recipe${recipe.id}.png`} alt={recipe.name} />
	</div>
);

export default RecipeTile;
