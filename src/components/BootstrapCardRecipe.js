import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BootstrapCardRecipe = props => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Header>{props.recipe.name}</Card.Header>
			<Card.Img variant="top" src={props.recipe.image_url} />
			<Card.Body>
				<Card.Title>{props.recipe.name}</Card.Title>
				<Card.Text>
					Tags:{' '}
					{props.recipe.tags.map(tag => {
						return <span>{tag} </span>;
					})}
				</Card.Text>
				<a href={props.recipe.url}>
					<Button variant="primary">Go to Recipe!</Button>
				</a>
				<a href={props.recipe.backup_url}>
					<Button variant="secondary">Or Backup</Button>
				</a>
			</Card.Body>
		</Card>
	);
};

export default BootstrapCardRecipe;
