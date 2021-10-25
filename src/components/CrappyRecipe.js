import React from 'react';

const CrappyRecipe = props => {
	return (
		<div>
			<h2>{props.recipe.name}</h2>
			<p>
				<a href={props.recipe.url}>Check it out!</a>{' '}
				<a href={props.recipe.backup_url}>(backup link)</a>
			</p>
			<img src={props.recipe.image_url} alt={props.recipe.name} />
		</div>
	);
};

export default CrappyRecipe;
