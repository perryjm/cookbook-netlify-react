import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BootstrapCookBook from './components/BootstrapCookBook.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import recipes from './recipes.json';

function App() {
	return (
		<div className="App">
			<Container fluid="md">
				<Row className="justify-content-md-center">
					<Col lg={true} />
					<h1>Our Favorite Recipes!</h1>
					<BootstrapCookBook className="center" recipes={recipes} />
				</Row>
			</Container>
		</div>
	);
}

export default App;
