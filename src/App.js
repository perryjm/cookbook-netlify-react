import './App.css';
import Container from 'react-bootstrap/Container';
import BootstrapCookBook from './components/BootstrapCookBook.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import recipes from './recipes.json';

function App() {
	return (
		<div className="App">
			<Container>
				<h1>Our Favorite Recipes!</h1>
				<BootstrapCookBook recipes={recipes} />
			</Container>
		</div>
	);
}

export default App;
