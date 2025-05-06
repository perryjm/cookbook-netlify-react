import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import BootstrapCookBook from './components/BootstrapCookBook.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import importedRecipes from './recipes.json';
import { filterRecipesAnd, filterRecipesOr } from './filterUtils';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.onFilterChange = this.onFilterChange.bind(this);
		this.state = { recipes: importedRecipes };
	}
	
	// OR
	onFilterChangeOr = filterString => {
		const recipes = filterRecipesOr(filterString, importedRecipes);
		return this.setState({ recipes });
	};
	
	// AND
	onFilterChange = filterString => {
		const recipes = filterRecipesAnd(filterString, importedRecipes);
		return this.setState({ recipes });
	};

	render() {
		return (
			<div className="App">
				<Container>
					<h1>Our Favorite Recipes!</h1>
					<BootstrapCookBook
						recipes={this.state.recipes}
						onFilterChange={this.onFilterChange}
					/>
				</Container>
			</div>
		);
	}
}

export default App;
