import React from 'react';
import Row from 'react-bootstrap/Row';
import BootstrapCardRecipe from './BootstrapCardRecipe.js';
import CardGroup from 'react-bootstrap/CardGroup';

const CrappyCookBook = props => {
	return (
		<div>
			<CardGroup>
				<Row>
					{props.recipes.map(recipe => {
						return <BootstrapCardRecipe recipe={recipe} />;
					})}
				</Row>
			</CardGroup>
		</div>
	);
};

export default CrappyCookBook;
