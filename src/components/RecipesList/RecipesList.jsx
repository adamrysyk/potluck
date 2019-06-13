import React from 'react';
import PropTypes from 'prop-types';

import styles from './recipesList.module.scss';
import RecipeTile from '../RecipeTile/RecipeTile';

const RecipesList = ({ recipes }) => (
	<div className={styles.recipesList}>
		{recipes.map(recipe => (
			<RecipeTile key={recipe.id} recipe={recipe}/>
		))}
	</div>
);

RecipesList.propTypes = {
	recipes: PropTypes.array
};

export default RecipesList;