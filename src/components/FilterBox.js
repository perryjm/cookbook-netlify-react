import React, { useState } from 'react';
import '../FilterBox.css';

const FilterBox = props => {
	const [isFocused, setIsFocused] = useState(false);

	const handleChange = e => {
		props.onFilterChange(e.target.value);
	};

	return (
		<div className="ios-search-container">
			<div className={`ios-search-bar ${isFocused ? 'focused' : ''}`}>
				<div className="ios-search-icon">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path
							d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
							fill="currentColor"
						/>
					</svg>
				</div>
				<input
					type="text"
					className="ios-search-input"
					placeholder="Search"
					aria-label="Search recipes"
					onChange={handleChange}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
			</div>
		</div>
	);
};

export default FilterBox;
