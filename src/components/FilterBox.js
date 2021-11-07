import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const FilterBox = props => {
	const activateFilter = () => {
		alert('filter being activated...');
	};
	const handleChange = e => {
		// alert(e.target.value);
		props.onFilterChange(e.target.value);
	};
	return (
		<InputGroup className="mb-3" onChange={handleChange}>
			<FormControl
				aria-label="Type text to filter recipes"
				aria-describedby="basic-addon1"
			/>
			<Button
				variant="outline-secondary"
				id="button-addon1"
				onClick={activateFilter}>
				🔍
			</Button>
		</InputGroup>
	);
};

export default FilterBox;
