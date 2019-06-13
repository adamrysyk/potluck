import { connect } from 'react-redux';
import RecipesList from '../../components/RecipesList/RecipesList';

const mapStateToProps = ({ recipes }) => ({
    recipes
});

const RecipesListContainer = connect(
    mapStateToProps
)(RecipesList);

export default RecipesListContainer;
