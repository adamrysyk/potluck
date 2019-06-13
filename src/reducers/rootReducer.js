import { handleActions } from 'redux-actions';

import recipes from '../mockData/recipes'

const initialState = {
	recipes
};

export default handleActions(
	{},
	initialState
);
