import { connect } from 'react-redux';

import { setActiveRecipe } from '../actions';
import RecipesList from '../components/RecipesList/RecipesList';


const mapStateToProps = ({ recipes }) => ({
    recipes
});

const mapDispatchToProps = dispatch => ({
    onClickRecipeTile: activeRecipe => dispatch(setActiveRecipe(activeRecipe)),
});

const RecipesListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipesList);

export default RecipesListContainer;
