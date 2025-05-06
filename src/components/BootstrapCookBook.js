import React from 'react';
import Row from 'react-bootstrap/Row';
import BootstrapCardRecipe from './BootstrapCardRecipe.js';
import FilterBox from './FilterBox.js';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

const CrappyCookBook = props => {
	return (
		<div>
			{/* FilterBox is now outside the CardGroup in its own container */}
			<Container className="filter-container mb-4" style={{ position: 'relative' }}>
				<FilterBox onFilterChange={props.onFilterChange} />
			</Container>
			
			{/* Recipe cards in their own separate container */}
			<CardGroup>
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
