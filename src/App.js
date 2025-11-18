import './theme.css';
import './App.css';
import React from 'react';
import BootstrapCookBook from './components/BootstrapCookBook.js';
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
				<div className="app-header">
					<div className="app-container">
						<h1 className="app-title">Recipes</h1>
					</div>
				</div>
				<div className="app-container">
					<BootstrapCookBook
						recipes={this.state.recipes}
						onFilterChange={this.onFilterChange}
					/>
				</div>
			</div>
		);
	}
}

export default App;
