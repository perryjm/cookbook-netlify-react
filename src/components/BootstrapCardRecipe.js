import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const BootstrapCardRecipe = props => {
	return (
		<Col>
			<Card style={{ width: '18rem', margin: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
				<Card.Header style={{ backgroundColor: '#f8f9fa', fontWeight: 'bold', textAlign: 'center' }}>{props.recipe.name}</Card.Header>
				<Card.Img variant="top" src={props.recipe.image_url} style={{ borderRadius: '10px 10px 0 0' }} />
				<Card.Body>
					<Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{props.recipe.name}</Card.Title>
					<Card.Text style={{ color: '#6c757d' }}>
						Tags:{' '}
						{props.recipe.tags.map(tag => (
							<span key={'tagId' + props.recipe.id + '-' + tag} style={{ marginRight: '5px', fontSize: '0.9rem', color: '#007bff' }}>
								{tag}
							</span>
						))}
					</Card.Text>
					<div className="d-grid gap-2">
						<a href={props.recipe.backup_url} style={{ textDecoration: 'underline', fontSize: '0.9rem', color: '#6c757d', marginBottom: '10px', display: 'block', textAlign: 'center' }} target="_blank" rel="noopener noreferrer">
							View backup recipe
						</a>
						<a href={props.recipe.url} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
							<Button variant="primary" size="lg" style={{ borderRadius: '5px' }}>
								View Recipe
							</Button>
						</a>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default BootstrapCardRecipe;
