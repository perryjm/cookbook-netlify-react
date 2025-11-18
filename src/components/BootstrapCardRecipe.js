import React from 'react';
import '../RecipeCard.css';

const BootstrapCardRecipe = props => {
	return (
		<div className="recipe-card-wrapper">
			<div className="recipe-card">
				<div className="recipe-image-container">
					<img
						src={props.recipe.image_url}
						alt={props.recipe.name}
						className="recipe-image"
					/>
				</div>

				<div className="recipe-content">
					<h3 className="recipe-title">{props.recipe.name}</h3>

					<div className="recipe-tags">
						{props.recipe.tags.map(tag => (
							<span
								key={'tagId' + props.recipe.id + '-' + tag}
								className="recipe-tag"
							>
								{tag}
							</span>
						))}
					</div>

					<div className="recipe-actions">
						<a
							href={props.recipe.url}
							className="recipe-button primary"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Recipe
						</a>
						<a
							href={props.recipe.backup_url}
							className="recipe-button secondary"
							target="_blank"
							rel="noopener noreferrer"
						>
							Backup
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BootstrapCardRecipe;
