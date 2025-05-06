import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const FilterBox = props => {
	const handleChange = e => {
		props.onFilterChange(e.target.value);
	};
	return (
		<div className="filter-wrapper" style={{ 
			width: '100%', 
			height: '60px', 
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			marginBottom: '20px'
		}}>
			<InputGroup 
				className="mb-0" 
				style={{ 
					maxWidth: '500px', 
					width: '100%',
					boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
					borderRadius: '5px', 
					display: 'flex', 
					alignItems: 'center',
					height: '40px'
				}} 
				onChange={handleChange}
			>
				<FormControl
					placeholder="Search recipes..."
					aria-label="Type text to filter recipes"
					aria-describedby="basic-addon1"
					style={{ 
						borderRadius: '5px 0 0 5px', 
						border: '1px solid #ced4da', 
						flex: '1',
						height: '100%'
					}}
				/>
				<Button 
					variant="outline-secondary" 
					id="button-addon1" 
					style={{ 
						borderRadius: '0 5px 5px 0', 
						border: '1px solid #ced4da',
						height: '100%'
					}}
				>
					🔍
				</Button>
			</InputGroup>
		</div>
	);
};

export default FilterBox;
