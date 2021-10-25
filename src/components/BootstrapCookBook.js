import React from 'react';
import BootstrapCardRecipe from './BootstrapCardRecipe.js';
import CardGroup from 'react-bootstrap/CardGroup';

const CrappyCookBook = props => {
	return (
		<div>
			<CardGroup>
				{props.recipes.map(recipe => {
					return <BootstrapCardRecipe recipe={recipe} />;
				})}
			</CardGroup>
		</div>
	);
};

export default CrappyCookBook;
