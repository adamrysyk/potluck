import React from 'react';
import PropTypes from 'prop-types';

import styles from './recipe.module.scss';

const Recipe = ({ activeRecipe }) => (
	<div className={styles.recipe}>
		<div className={`recipe-banner recipe-banner-${activeRecipe.id}`}>
			<h1>
				{activeRecipe.name}
			</h1>
		</div>
	</div>
);

Recipe.propTypes= {
	activeRecipe: PropTypes.object
};

export default Recipe;
