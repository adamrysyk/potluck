import React, { Fragment } from 'react';

import HeroImage from '../HeroImage/HeroImage';
import RecipesListContainer from '../../containers/RecipesListContainer';

const HomePage = () => (
	<Fragment>
		<HeroImage />
		<RecipesListContainer />
	</Fragment>
);

export default HomePage;