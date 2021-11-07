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
	findTags = query => {
		// TODO: Match on partial words
		return importedRecipes.filter(recipe => {
			return recipe.tags.find(tag => {
				return tag.toLowerCase() === query;
			});
		});
	};
	findNames = query => {
		// TODO: Match on partial words
		return importedRecipes.filter(recipe => {
			let a = recipe.name.toLowerCase().split(' ');
			return a.find(element => element === query);
		});
	};
	// OR
	onFilterChangeOr = filterString => {
		filterString = filterString.toLowerCase();
		if (filterString === '') {
			return this.setState({ recipes: importedRecipes });
		}
		let filterStringWords = filterString.split(' ');
		let recipes = [];
		filterStringWords.forEach(query => {
			recipes = recipes.concat(
				this.findTags(query).filter(element => !recipes.includes(element))
			);
			recipes = recipes.concat(
				this.findNames(query).filter(element => !recipes.includes(element))
			);
		});
		return this.setState({ recipes });
	};
	// AND
	onFilterChange = filterString => {
		filterString = filterString.toLowerCase();
		if (filterString === '') {
			return this.setState({ recipes: importedRecipes });
		}
		let filterStringWords = filterString.split(' ');
		let recipes = [];
		let recipeSets = [];
		let count = 0;
		filterStringWords.forEach(query => {
			recipeSets.push([]);
			recipeSets[count] = recipeSets[count].concat(
				this.findTags(query).filter(element => !recipes.includes(element))
			);
			recipeSets[count] = recipeSets[count].concat(
				this.findNames(query).filter(element => !recipes.includes(element))
			);
			count++;
		});
		if (recipeSets.length === 1) {
			return this.setState({ recipes: recipeSets[0] });
		}
		recipes = recipeSets.reduce((prevSet, currSet) =>
			prevSet.filter(element => currSet.includes(element))
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
