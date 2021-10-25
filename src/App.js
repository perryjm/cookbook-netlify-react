import './App.css';
import CrappyCookBook from './components/CrappyCookBook.js';
import recipes from './recipes.json';

function App() {
	return (
		<div className="App">
			<h1>Cookbook App</h1>
			<CrappyCookBook recipes={recipes} />
		</div>
	);
}

export default App;
