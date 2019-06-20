import React from 'react';
import PropTypes from 'prop-types';

import styles from './recipe.module.scss';

const Recipe = ({ activeRecipe }) => (
	<div className={styles.recipe}>
		<div className={`recipe-banner recipe-banner-${activeRecipe.id}`}>
			<h1>
				{activeRecipe.name}
			</h1>
            <div>
                <div>
                    <i className="leaf icon"></i>
                    <span>{activeRecipe.filterTags[0]}</span>
                </div>
                <div>
                    <i className="utensils icon"></i>
                    <span>Serves {activeRecipe.servingSize}</span>
                </div>
                <div>
                    <i className="clock outline icon"></i>
                    <span>{activeRecipe.prepTime}</span>
                </div>
            </div>
		</div>
        <div className="recipe-toggle-container">
            <div>Ingredients</div>
            <div>Method</div>
        </div>
        <div className="recipe-top-area">
            <div>
                <p>
                    This is a delicious recipe from one of PC Potluck's top chefs! It's simple to prepare and will have everyone asking for more!.
                </p>
                <h1>Ingredients</h1>
                <ul>
                    { activeRecipe.ingredients.map(ingredient => (
                        <li key={ingredient.name}>{ingredient.quantity} - {ingredient.name}</li>
                    ))}
                </ul>

            </div>
            <div>
                <p>You will earn</p>
                <h1>2,501</h1>
                <p>if you shop this</p>
                <p>recipe online!</p>
            </div>
        </div>
	</div>
);

Recipe.propTypes= {
	activeRecipe: PropTypes.object
};

export default Recipe;
