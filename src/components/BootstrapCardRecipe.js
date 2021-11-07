import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const BootstrapCardRecipe = props => {
	return (
		<Col>
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
					<div className="d-grid gap-2">
						<a href={props.recipe.url}>
							<Button variant="outline-primary" size="lg">
								View the Recipe!
							</Button>
						</a>
						<a href={props.recipe.backup_url}>
							<Button variant="outline-secondary" size="lg" disabled>
								Backup
							</Button>
						</a>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default BootstrapCardRecipe;
