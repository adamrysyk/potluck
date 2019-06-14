import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './recipeTile.module.scss';

const RecipeTile = ({ recipe , onHandleRecipeClick}) => (
	<Link to={`/recipe/${recipe.id}`} onClick={onHandleRecipeClick}>
		<div className={styles.recipeTile}>
			<h2>
				{recipe.name}
			</h2>
			<img src={`${process.env.PUBLIC_URL}/recipeTiles/recipe${recipe.id}.png`} alt={recipe.name} />
		</div>
	</Link>
);

RecipeTile.propTypes = {
	recipes: PropTypes.array
};

export default RecipeTile;
