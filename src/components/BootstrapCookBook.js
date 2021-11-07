import React from 'react';
import Row from 'react-bootstrap/Row';
import BootstrapCardRecipe from './BootstrapCardRecipe.js';
import FilterBox from './FilterBox.js';
import CardGroup from 'react-bootstrap/CardGroup';

const CrappyCookBook = props => {
	return (
		<div>
			<CardGroup>
				<FilterBox onFilterChange={props.onFilterChange} />
				<Row>
					{props.recipes.map(recipe => {
						return (
							<BootstrapCardRecipe
								key={'cardRecipeId' + recipe.id}
								recipe={recipe}
							/>
						);
					})}
				</Row>
			</CardGroup>
		</div>
	);
};

export default CrappyCookBook;
