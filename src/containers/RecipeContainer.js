import { connect } from 'react-redux';

import Recipe from '../components/Recipe/Recipe';

const mapStateToProps = ({ activeRecipe }) => ({
    activeRecipe
});

const RecipeContainer = connect(
    mapStateToProps
)(Recipe);

export default RecipeContainer;
