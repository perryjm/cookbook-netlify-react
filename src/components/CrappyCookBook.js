import React from 'react';
import CrappyRecipe from './CrappyRecipe.js';

const CrappyCookBook = props => {
	return (
		<div>
			{props.recipes.map(recipe => {
				return <CrappyRecipe key={'recipeNo' + recipe.id} recipe={recipe} />;
			})}
		</div>
	);
};

export default CrappyCookBook;
