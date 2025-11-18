import React from 'react';
import BootstrapCardRecipe from './BootstrapCardRecipe.js';
import FilterBox from './FilterBox.js';
import '../CookBook.css';

const CrappyCookBook = props => {
	return (
		<div className="cookbook-container">
			<FilterBox onFilterChange={props.onFilterChange} />

			<div className="recipes-grid">
				{props.recipes.map((recipe, index) => {
					return (
						<BootstrapCardRecipe
							key={'cardRecipeId' + recipe.id}
							recipe={recipe}
						/>
					);
				})}
			</div>

			{props.recipes.length === 0 && (
				<div className="no-results">
					<div className="no-results-icon">🔍</div>
					<div className="no-results-text">No recipes found</div>
					<div className="no-results-subtext">Try a different search term</div>
				</div>
			)}
		</div>
	);
};

export default CrappyCookBook;
