import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import BootstrapCookBook from './components/BootstrapCookBook.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import importedRecipes from './recipes.json';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.onFilterChange = this.onFilterChange.bind(this);
		this.state = { recipes: importedRecipes };
	}
	onFilterChange = query => {
		query = query.toLowerCase();
		if (query === '') {
			return this.setState({ recipes: importedRecipes });
		}
		let recipes = importedRecipes.filter(recipe => {
			return recipe.tags.find(tag => {
				return tag.toLowerCase() === query;
			});
		});
		// include names
		let matchingNames = importedRecipes.filter(recipe => {
			let a = recipe.name.toLowerCase().split(' ');
			return a.find(element => element === query);
		});
		// add names to recipes, but only if it's not already included in recipes.
		recipes = recipes.concat(
			matchingNames.filter(element => !recipes.includes(element))
		);
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
