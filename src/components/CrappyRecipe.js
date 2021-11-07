import React from 'react';

const CrappyRecipe = props => {
	return (
		<div key={'recipeId' + props.recipe.id}>
			<h2>{props.recipe.name}</h2>
			<h4>
				Tags:{' '}
				{props.recipe.tags.map(tag => {
					return <span>{tag} </span>;
				})}
			</h4>
			<p>
				<a href={props.recipe.url}>Take me to the Recipe!</a>{' '}
				<a href={props.recipe.backup_url}>(backup link)</a>
			</p>
			<img src={props.recipe.image_url} alt={props.recipe.name} />
		</div>
	);
};

export default CrappyRecipe;
