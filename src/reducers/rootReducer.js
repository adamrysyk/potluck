import { handleActions } from 'redux-actions';

import recipes from '../mockData/recipes'
import { setActiveRecipe } from '../actions';

const initialState = {
	recipes,
	activeRecipe: recipes[0]
};

export default handleActions(
	{
		[setActiveRecipe]: (state, { payload: activeRecipe }) => ({
			...state,
			activeRecipe
		}),
	},
	initialState
);
